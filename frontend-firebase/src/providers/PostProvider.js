import React, { useEffect, useState, createContext } from 'react'
import { firestore } from '@config/firebase'
import { collectIdsAndDocs } from '@utils/helpers'

export const PostContext = createContext()

const PostProvider = ({ children }) => {
    const [posts, setState] = useState([])

    useEffect(() => {
        let unsubscribe = null
        async function fetchData() {
            unsubscribe = await firestore
                .collection('posts')
                .onSnapshot((querySnapshot) => {
                    const posts = querySnapshot.docs.map(collectIdsAndDocs)
                    setState({
                        posts,
                    })
                })
        }
        fetchData()

        return () => unsubscribe()
    }, [])

    return <PostContext.Provider value={posts}>{children}</PostContext.Provider>
}

export default PostProvider
