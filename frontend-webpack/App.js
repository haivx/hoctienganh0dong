import React, { Fragment, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import configureStore from '@store'
import Layout from '@components/layout'
import Loading from '@components/Loading'
import { authFirebase } from '@config/firebase'
import { createUserProfileDocument } from '@config/firebase'
import 'react-toastify/dist/ReactToastify.css'
import './src/styles/index.scss'

const store = configureStore()
const AsyncLoginPage = Loadable({
    loader: () => import('@containers/login'),
    loading: Loading,
})

const App = (props) => {
    const [user, setCurrentUser] = useState(null)
    useEffect(() => {
        if (window.location.pathname !== '/login' && !user.accessToken) {
            window.location.href = '/login'
        }
    }, [])
    console.log('User', user)
    let unsubscribeFromAuth = null
    useEffect(() => {
        async function auth() {
            unsubscribeFromAuth = authFirebase.onAuthStateChanged(
                async (userAuth) => {
                    const user = await createUserProfileDocument(userAuth)
                    console.log('UserUser', user)
                    if (user) {
                        const currentUser = {
                            accessToken: user.refreshToken,
                            uid: user.uid,
                            email: user.email,
                            displayName: user.displayName,
                        }
                        // localStorage.setItem("auth", JSON.stringify(data));
                        console.log('UserUser', currentUser)
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
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/login'} component={AsyncLoginPage} />
                        <Route path={'/'} component={Layout} />
                    </Switch>
                </BrowserRouter>
            </Provider>
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
