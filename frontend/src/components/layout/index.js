import React, { Fragment, useState } from "react";
import { Layout, Menu } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import CustomHeader from '../header'
import "./index.scss";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const CustomLayout = ({ children }) => {
    const [state, setState] = useState(false);
    const isAuthorized = true;
    const onCollapse = (collapsed) => {
        setState(collapsed);
    };
    return (
        <Fragment>
            {isAuthorized ? (
                <Layout style={{ minHeight: "100vh" }}>
                    <Sider
                        collapsible
                        collapsed={state}
                        onCollapse={onCollapse}
                    >
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            defaultSelectedKeys={["1"]}
                            mode="inline"
                        >
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                Dashboard
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                Settings
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                icon={<UserOutlined />}
                                title="Admin"
                            >
                                <Menu.Item key="3">Account</Menu.Item>
                                <Menu.Item key="4">Authentication</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9" icon={<FileOutlined />} />
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header
                            className="site-layout-background"
                            style={{ padding: 0 }}
                        />
                        <Content style={{ margin: "0 16px" }}>
                            {children}
                        </Content>
                        <Footer style={{ textAlign: "center" }}>
                            Rango Entertainment
                        </Footer>
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
