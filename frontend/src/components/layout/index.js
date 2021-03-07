import React, { Fragment, useEffect, useState } from "react";
import { Layout, Menu, Avatar, Popover } from "antd";
import { useHistory } from "react-router-dom";
import { DashboardOutlined, SettingOutlined, FileDoneOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { authFirebase } from "../../../config/firebase";
import CustomHeader from "../header";
import logo from "Resources/psyduck.png";
import "./index.scss";
const { Header, Content, Sider } = Layout;
const CustomLayout = ({ children }) => {
    const history = useHistory();
    const [collapsed, setCollapse] = useState(false);
    const [isAuthorized, setAuthorized] = useState(false);

    useEffect(() => {
        const isAuthorized = !!JSON.parse(localStorage.getItem("auth"))?.accessToken;
        setAuthorized(isAuthorized)
    }, [localStorage.getItem("auth")]);
    
    const onCollapse = (collapsed) => {
        setCollapse(collapsed);
    };
    const handleLogout = () => {
        localStorage.clear();
        authFirebase.signOut();
        history.push("/login");
    };
    const handleChange = (value) => {
        const routes = {
            1: '/dashboard',
            2: '/admin',
            3: '/posts',
        }
        history.push(routes[value.key]);
    }
    const content = (
        <div className="custom-left-header">
            <div className="item">
                <UserOutlined /> <span>Profile</span>
            </div>
            <div className="item" onClick={handleLogout}>
                <LogoutOutlined /> <span>Log out</span>
            </div>
        </div>
    );
    return (
        <Fragment>
            {isAuthorized ? (
                <Layout style={{ minHeight: "100vh" }}>
                    <Sider collapsible onCollapse={onCollapse} collapsed={collapsed}>
                        <div className="logo" style={{ height: 32, margin: 16, background: "rgba(255, 255, 255, 0.3)" }} />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} onClick={handleChange}>
                            <Menu.Item key="1" icon={<DashboardOutlined />}>
                                Dashboard
                            </Menu.Item>
                            <Menu.Item key="2" icon={<FileDoneOutlined />}>
                                Admin
                            </Menu.Item>
                            <Menu.Item key="3" icon={<SettingOutlined />} >
                                Posts
                            </Menu.Item>
                            <Menu.Item key="4" icon={<SettingOutlined />}>
                                Settings
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header
                            className="site-layout-background"
                            style={{ padding: "0 20px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}
                        >
                            <Popover style={{ padding: 0 }} placement="bottomLeft" title={null} content={content}>
                                <Avatar src={logo} />
                            </Popover>
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: "24px 16px",
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            ) : (
                <Layout>
                    <CustomHeader />
                    {children}
                </Layout>
            )}
        </Fragment>
    );
};
export default CustomLayout;
