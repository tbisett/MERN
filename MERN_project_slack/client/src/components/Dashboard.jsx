import React from 'react'
import SideNav from './SideNav'
import OpenThread from './OpenThread'
import { useThreads } from '../contexts/ThreadProvider'

export default function Dashboard({ id }) {
    const { selectedThread } = useThreads()
    console.log("thread =====>", selectedThread);
    
    return (
        <div className="d-flex" style={{ height: "100vh" }}>
            <SideNav id={id} />
            {/* using a short circuit aka "logical &&" method to conditionally render the open thread component */}
            { selectedThread && <OpenThread />}
        </div>
    )
}
