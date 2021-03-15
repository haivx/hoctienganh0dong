import React, { Fragment, Suspense, useEffect, useState } from 'react'
import Loadable from 'react-loadable'
import Loading from '@components/Loading'
import { Layout as AntLayout, Menu, Avatar, Popover } from 'antd'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { authFirebase } from '@config/firebase'
import PageWrapper from '@components/PageWrapper'
import './index.scss'
const { Header, Content, Sider } = AntLayout
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
    <BrowserRouter>
        {Object.keys(routes).map((key) => (
            <Route
                key={key}
                path={routes[key].path}
                component={routes[key].component}
                exact={routes[key].exact}
                {...props}
            />
        ))}
    </BrowserRouter>
)
