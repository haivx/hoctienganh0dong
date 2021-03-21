import React, { Suspense } from 'react'
import Loadable from 'react-loadable'
import { ToastContainer } from 'react-toastify'
import Loading from '@components/Loading'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PageAuth from '@components/PageAuth'
import Layout from '@components/layout'

const RenderPage = (Component, accessRoles = []) => (props) => {
    return (
        <Suspense fallback={Loading}>
            <PageAuth accessRoles={accessRoles}>
                <Component {...props} />
            </PageAuth>
        </Suspense>
    )
}

const AsyncDashboardPage = Loadable({
    loader: () => import('@containers/admin/Dashboard'),
    loading: Loading,
})

const AsyncLoginPage = Loadable({
    loader: () => import('@containers/login'),
    loading: Loading,
})
const AsyncHomePage = Loadable({
    loader: () => import('@containers/landing'),
    loading: Loading,
})

const Main = () => (
    <Layout>
        <Switch>
            <Route
                exact
                path="/admin/dashboard"
                component={RenderPage(AsyncDashboardPage, [])}
            />
            <Route
                exact
                path="/admin/album"
                component={RenderPage(AsyncHomePage)}
            />
            <Route path="/admin/artist" component={RenderPage(AsyncHomePage)} />
            <Route
                path="/admin/profile"
                component={RenderPage(AsyncHomePage)}
            />
        </Switch>
    </Layout>
)

export default () => {
    return (
        <Router>
            <Route exact path="/" component={AsyncLoginPage} />
            <Route exact path="/:group/:func?" component={Main} />
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
        </Router>
    )
}
