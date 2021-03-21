import React from 'react'
import { Row, Col, Input } from 'antd'
import {
    RocketOutlined,
    AudioOutlined,
    SolutionOutlined,
    DownloadOutlined,
    DashboardOutlined,
    CustomerServiceOutlined,
    BellOutlined,
} from '@ant-design/icons'
import logo from '@resources/admin/logo.png'
import profle from '@resources/teacher.png'
import './style.scss'
const { Search } = Input

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <Row>
                <Col span={4}>
                    <div className="app-layout__left">
                        <div className="img">
                            <img src={logo} alt="" />
                        </div>
                        <div className="menu">
                            <ul>
                                <li className="item">
                                    <RocketOutlined /> Album
                                </li>
                                <li className="item">
                                    <AudioOutlined /> Song
                                </li>
                                <li className="item">
                                    <SolutionOutlined /> Artist
                                </li>
                                <li className="item item-group">My Track</li>
                                <li className="item">
                                    <CustomerServiceOutlined /> Favorites
                                </li>
                                <li className="item">
                                    <DashboardOutlined /> History
                                </li>
                                <li className="item">
                                    <DownloadOutlined /> Download Items
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col span={20}>
                    <div className="header-panel">
                        <div className="header-panel__left">
                            <Search
                                placeholder="Search your entertainment "
                                allowClear
                            />
                        </div>
                        <div className="header-panel__right">
                            <div className="noti">
                                <BellOutlined style={{ fontSize: 30 }} />
                            </div>
                            <div className="profile">
                                <img src={profle} alt="" />
                            </div>
                        </div>
                    </div>
                    {children}
                </Col>
            </Row>
        </div>
    )
}

export default Layout
