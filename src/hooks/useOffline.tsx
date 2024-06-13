import {useEffect, useState} from 'react'

export default function useOffline() {
    const [isOffline, setIsOffline] = useState(!window.navigator.onLine)
    // add event listener
    const onOffline = () => {
        setIsOffline(true)
    }
    const onOnline = () => {
        setIsOffline(false)
    }

    useEffect(() => {
        window.addEventListener('offline', onOffline)
        window.addEventListener('online', onOnline)

        return () => {
            // remove event listener
            window.removeEventListener('offline', onOffline)
            window.removeEventListener('online', onOnline)
        }
    }, [])

    return {
        isOffline
    }
}