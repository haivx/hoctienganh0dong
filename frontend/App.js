import React, { Fragment, useContext, useEffect } from 'react'
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
import 'react-toastify/dist/ReactToastify.css'
import './src/styles/index.scss'

const AsyncLoginPage = Loadable({
    loader: () => import('@containers/login'),
    loading: Loading,
})

const App = () => {
    const history = useHistory()
    // useEffect(() => {
    //     console.log('useruseruseruser', user, window.location.pathname)
    //     if (user && window.location.pathname === "/login") {
    //         history.push('/admin/dashboard')
    //     } else {
    //         history.push('/login')
    //     }
    // }, [user])

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
