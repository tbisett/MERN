import io from 'socket.io-client'
import React, { useState, useEffect } from 'react'

function chat() {
    const socket = io('http://localhost:3000')

    // useEffect( () => {
    //     socket.listeners
    // })

    return (
        <div>
            
        </div>
    )
}

export default chat


