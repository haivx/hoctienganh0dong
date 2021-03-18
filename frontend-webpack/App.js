import React, { Fragment, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Loadable from 'react-loadable'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from 'react-router-dom'
import Layout from '@components/layout'
import Loading from '@components/Loading'
import { authFirebase } from '@config/firebase'
import { createUserProfileDocument } from '@config/firebase'
import 'react-toastify/dist/ReactToastify.css'
import './src/styles/index.scss'

const AsyncLoginPage = Loadable({
    loader: () => import('@containers/login'),
    loading: Loading,
})

const App = () => {
    const history = useHistory()
    const [user, setCurrentUser] = useState(null)
    useEffect(() => {
        if (user?.uid) {
            history.push('/admin/dashboard')
        } else {
            history.push('/login')
        }
    }, [user?.uid])

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
                        localStorage.setItem(
                            'auth',
                            JSON.stringify(currentUser)
                        )
                        setCurrentUser(currentUser)
                    }
                }
            )
        }
        auth()
        return () => unsubscribeFromAuth()
    }, [])
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/login" component={AsyncLoginPage} />
                    <Route path="/" component={Layout} />
                </Switch>
            </Router>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Fragment>
    )
}

export default App
