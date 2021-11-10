import React, { useContext } from 'react'
import localStorage from '../hooks/localStorage'
// CREATING REACT CONTEXT AND STORING IN A VAR
const FriendsContext = React.createContext()

export function useFriends() {
    return useContext(FriendsContext)
}

export function FriendProvider({ children }) {
// LIST OF FRIENDS 🔽 
    const [friends, setFriends] = localStorage('friends', [])
// CREATING A CONTACT USING THE SPEAD OPERATOR 🔽 
    const addFriend = (id, name) => {
        setFriends(prevFriends => {
            return [...prevFriends, { id, name }]
        })
    }

    return (
        <div>
            {/* ACCESS TO ADDING A FRIEND FUNCTION AND THE LIST OF FRIENDS 🔽  */}
            <FriendsContext.Provider value={{ friends, addFriend }}>
                { children }
            </FriendsContext.Provider>
        </div>
    )
}



