import React, { useEffect, useState } from 'react';

const PREFIX = 'mern_project_slack-'

function LocalStorage(key, initVal) {
    const prefixKey = PREFIX + key;
    // Use function version of useState because getting val from storage and parsing JSON is
    // fairly slow, so we only want it to run once
    const [value, setValue] = useState(() => {
        const jsonVal = localStorage.getItem(prefixKey)
        // we want if jsonVal != null instead of so it doesnt return false if a val = 0
        if (jsonVal != null) return JSON.parse(jsonVal)
        if (typeof initVal === 'function') {
            return initVal()
        } else {
            return initVal;
        }

    });

    useEffect(() => {
        localStorage.setItem(prefixKey, JSON.stringify(value))
    }, [prefixKey, value])
    
    return [value, setValue]
}

export default LocalStorage;
