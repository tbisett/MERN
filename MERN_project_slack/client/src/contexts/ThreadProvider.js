import React, { useContext, useState } from 'react'
import localStorage from '../hooks/localStorage'
import { useFriends } from './FriendProvider'
// CREATING REACT CONTEXT AND STORING IN A VAR
const ThreadsContext = React.createContext()

export function useThreads() {
    return useContext(ThreadsContext)
}

export function ThreadsProvider({ id, children }) {
// LIST OF THREADS 🔽 
    const [threads, setThreads] = localStorage('threads', [])
    const [selectedThreadIndex, setSelectedThreadIndex] = useState(0)
    // ACCESS TO THE FRIENDS LIST 🔽
    const { friends } = useFriends()
// CREATING A THREAD USING THE SPEAD OPERATOR 🔽 
    const createThread= (recipients) => {
        setThreads(prevThreads => {
            return [...prevThreads, { recipients, messages: [] }]
        })
    }

    function addMessageToThread({ recipients, text, sender }) {
        setThreads(prevThreads => {
            let changes = false;
            const newMessage = { sender, text };
            const newThreads = prevThreads.map(
                thread => {
                    if (arrayEqual(thread.recipients, recipients)) {
                        changes = true;
                        return {
                            ...threads, messages: [...thread.messages, newMessage]
                        }
                        
                    }
                    return thread;
                }
            )
            if (changes) { 
                return newThreads
            } else {
                return [...prevThreads, { recipients, messages: [newMessage] }]
            }
        })
    }

    function sendMessage(recipients, text) {
        addMessageToThread({ recipients, text, sender: id})
    }
// RECIPIENT IS JUST AN ID
    const formattedThreads = threads.map((thread, index) => {
        console.log("recipients >>>>>>>>>", thread.recipients);
        const recipients = thread.recipients.map(recipient => {
            const friend = friends.find(friend => {
                return friend.id === recipient
            })
            const name = (friend && friend.name) || recipient
            // RETURNS NAME FROM ABOVE OR DEFAULTS TO RECIPIENT
            return { id: recipient, name}
        })
        const messages = thread.messages.map(message => {
            const friend = friends.find(friend => {
                return friend.id === message.sender
            })
            const name = (friend && friend.name) || message.sender
            const fromMe = id === message.sender
            return { ...message, senderName: name, fromMe }

        })
        const selected = index === selectedThreadIndex
        // returns everything from thread and replaces recipient with formatted recipients(now includes name and id)
        console.log(recipients)
        return {...thread, messages, recipients, selected}
    })

    const output = {
        threads: formattedThreads,
        selectedThread: formattedThreads[selectedThreadIndex],
        selectThreadIndex: setSelectedThreadIndex,
        sendMessage,
        createThread
    }

    return (
        <div>
            {/* ACCESS TO CREATING A THREAD FUNCTION AND THE LIST OF FRIENDS 🔽  */}
            <ThreadsContext.Provider value={output}>
                { children }
            </ThreadsContext.Provider>
        </div>
    )
    
}

function arrayEqual(a, b) {
    if(a.length !== b.length) {
        return false;
    } else {
        a.sort()
        b.sort()
    }
    // IS EVERY ELEMENT IN A === TO EVERY ELEMENT IN B AT EVERY INDEX, IF SO OUR ARRAYS ARE EQUAL
    return a.every((element, index) => {
        return element === b[index] 
    })
}

