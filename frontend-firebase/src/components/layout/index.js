import React, { Suspense, useState } from 'react'
import Loadable from 'react-loadable'
import Loading from '@components/Loading'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageWrapper from '@components/PageWrapper'
import './index.scss'
import Admin from '@containers/admin'

const RenderPage = (Component, accessRoles = []) => (props) => {
    return (
        <Suspense fallback={Loading}>
            <PageWrapper accessRoles={accessRoles}>
                <Component {...props} />
            </PageWrapper>
        </Suspense>
    )
}

const AsyncDashboardPage = Loadable({
    loader: () => import('../../containers/admin/Dashboard'),
    loading: Loading,
})

const AsyncPostsPage = Loadable({
    loader: () => import('@containers/admin/Posts'),
    loading: Loading,
})

const AsyncProfilePage = Loadable({
    loader: () => import('@containers/admin/Profile'),
    loading: Loading,
})

const AsyncHomePage = Loadable({
    loader: () => import('@containers/landing'),
    loading: Loading,
})

export const AdminPages = {
    dashboard: {
        component: AsyncDashboardPage,
        path: '/admin/dashboard',
        exact: true,
    },
    post: {
        component: AsyncPostsPage,
        path: '/admin/post',
        exact: true,
    },
    profile: {
        component: AsyncProfilePage,
        path: '/admin/profile',
        exact: true,
    },
}

const routes = {
    admin: {
        component: RenderPage(Admin, []),
        path: '/admin',
    },
    landing: {
        component: RenderPage(AsyncHomePage, []),
        path: '/',
        exact: true,
    },
}

export default (props) => (
    <Switch>
        {Object.keys(routes).map((key) => (
            <Route
                key={key}
                path={routes[key].path}
                component={routes[key].component}
                exact={routes[key].exact}
                {...props}
            />
        ))}
    </Switch>
)
