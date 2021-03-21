import React, { useEffect, useState, createContext } from 'react'
import { authFirebase } from '@config/firebase'
import { createUserProfileDocument } from '@config/firebase'

export const UserContext = createContext({ user: null })

const Userprovier = ({ children }) => {
    const [user, setState] = useState([])

    useEffect(() => {
        let unsubscribeFromAuth = null
        async function auth() {
            unsubscribeFromAuth = authFirebase.onAuthStateChanged(
                async (userAuth) => {
                    const user = await createUserProfileDocument(userAuth)
                    console.log('UserUser App', user)
                    if (user) {
                        const currentUser = {
                            photoURL: user.photoURL,
                            uid: user.uid,
                            email: user.email,
                            displayName: user.displayName,
                        }
                        setState(currentUser)
                    }
                }
            )
        }
        auth()
        return () => unsubscribeFromAuth()
    }, [])

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export default Userprovier
