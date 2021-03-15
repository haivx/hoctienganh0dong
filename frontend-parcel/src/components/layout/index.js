import React, { Fragment, Suspense, useEffect, useState } from "react";
import Loadable from "react-loadable";
import Loading from "~/src/components/Loading";
import { Layout as AntLayout, Menu, Avatar, Popover } from "antd";
import { Route, BrowserRouter } from "react-router-dom";
import { authFirebase } from "~/src/config/firebase";
import PageWrapper from "~/src/components/PageWrapper";
import "./index.scss";
const { Header, Content, Sider } = AntLayout;
import Admin from '../../containers/admin';

const RenderPage = (Component, accessRoles = []) => (props) => {
    return (
        <Suspense fallback={<div>{"loading..."}</div>}>
            <PageWrapper accessRoles={accessRoles}>
                <Component {...props} />
            </PageWrapper>
        </Suspense>
    );
};

const AsyncDashboardPage = Loadable({
    loader: () => import("~/src/containers/admin/Dashboard"),
    loading: Loading,
});

const AsyncPostsPage = Loadable({
    loader: () => import("~/src/containers/admin/Posts"),
    loading: Loading,
});

const HomePage = React.lazy(() => import("~/src/containers/landing"));
const AsyncHomePage = Loadable({
    loader: () => import("~/src/containers/landing"),
    loading: Loading,
});

export const AdminPages = {
    dashboard: {
        component: RenderPage(HomePage, []),
        path: "/dashboard",
    },
    post: {
        component: RenderPage(HomePage, []),
        path: "/post",
    },
};

const Pages = {
    admin: {
        component: RenderPage(Admin, []),
        accessRoles: [],
        path: "/admin",
        exact: false,
    },
    landing: {
        component: RenderPage(HomePage, []),
        accessRoles: [],
        path: "/",
        exact: true,
    },
};


export default function Layout(props) {
    return (<>
    {Object.keys(Pages).map((page) => {
    debugger
        console.log("page", Pages[page].path, Pages[page].component);
        return <Route key={page} path={Pages[page].path} component={Pages[page].component} exact={Pages[page].exact} {...props} />;
    })}
        </>
    );
}

// const CustomLayout = ({ children }) => {
//     const history = useHistory();
//     const [collapsed, setCollapse] = useState(false);
//     const [isAuthorized, setAuthorized] = useState(false);

//     useEffect(() => {
//         debugger
//         const isAuthorized = !!JSON.parse(localStorage.getItem("auth"))?.uid;
//         setAuthorized(isAuthorized)
//     }, [localStorage.getItem("auth")]);

//     const onCollapse = (collapsed) => {
//         setCollapse(collapsed);
//     };
//     const handleLogout = () => {
//         localStorage.clear();
//         authFirebase.signOut();
//         history.push("/login");
//     };
//     const handleChange = (value) => {
//         const routes = {
//             1: '/dashboard',
//             2: '/admin',
//             3: '/posts',
//         }
//         history.push(routes[value.key]);
//     }
//     const content = (
//         <div className="custom-left-header">
//             <div className="item">
//                 <UserOutlined /> <span>Profile</span>
//             </div>
//             <div className="item" onClick={handleLogout}>
//                 <LogoutOutlined /> <span>Log out</span>
//             </div>
//         </div>
//     );
//     return (
//         <Fragment>
//             {isAuthorized ? (
//                 <Layout style={{ minHeight: "100vh" }}>
//                     <Sider collapsible onCollapse={onCollapse} collapsed={collapsed}>
//                         <div className="logo" style={{ height: 32, margin: 16, background: "rgba(255, 255, 255, 0.3)" }} />
//                         <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} onClick={handleChange}>
//                             <Menu.Item key="1" icon={<DashboardOutlined />}>
//                                 Dashboard
//                             </Menu.Item>
//                             <Menu.Item key="2" icon={<FileDoneOutlined />}>
//                                 Admin
//                             </Menu.Item>
//                             <Menu.Item key="3" icon={<SettingOutlined />} >
//                                 Posts
//                             </Menu.Item>
//                             <Menu.Item key="4" icon={<SettingOutlined />}>
//                                 Settings
//                             </Menu.Item>
//                         </Menu>
//                     </Sider>
//                     <Layout className="site-layout">
//                         <Header
//                             className="site-layout-background"
//                             style={{ padding: "0 20px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}
//                         >
//                             <Popover style={{ padding: 0 }} placement="bottomLeft" title={null} content={content}>
//                                 <Avatar src={logo} />
//                             </Popover>
//                         </Header>
//                         <Content
//                             className="site-layout-background"
//                             style={{
//                                 margin: "24px 16px",
//                                 padding: 24,
//                                 minHeight: 280,
//                             }}
//                         >
//                             {children}
//                         </Content>
//                     </Layout>
//                 </Layout>
//             ) : (
//                 <Layout>
//                     <CustomHeader />
//                     {children}
//                 </Layout>
//             )}
//         </Fragment>
//     );
// };
// export default CustomLayout;
