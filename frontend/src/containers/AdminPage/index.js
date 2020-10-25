import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'

import { Table, Button, PageHeader, Modal, Form, Input } from "antd";
import Layout from "Components/layout";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import userAction from 'Action/userAction';
import Api from 'Utils/Api'

import "./index.scss";

const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        email: "job@gmail.com",
        roles: "mod",
        phone: "0989838891",
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        email: "job@gmail.com",
        roles: "admin",
        phone: "0989838891",
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        email: "job@gmail.com",
        roles: "admin",
        phone: "0989838891",
    },
];

const AdminPage = () => {
    const dispatch = useDispatch();
    const listUser = useSelector(state => state.user)
    const [state, setState] = useState({
        visibleAdd: false,
    });

    const _setState = (data) => {
        setState((prevState) => ({
            ...prevState,
            ...data,
        }));
    };

    useEffect(() => {
        dispatch(userAction.fetchUsers())
    }, [dispatch])

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Roles",
            dataIndex: "roles",
            key: "roles",
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <div className="btn-action">
                    <Button type="primary" icon={<EditOutlined />}>
                        Edit
                    </Button>
                    <Button type="danger" icon={<DeleteOutlined />}>
                        Delete
                    </Button>
                </div>
            ),
        },
    ];
    const handleOpenAdd = () => {
        _setState({
            visibleAdd: true,
        });
    };

    const handleClose = () => {
        _setState({
            visibleAdd: false,
        });
    };
    const onAdd = (value) => {
        Api.post(`auth/register`, value, (res, error) => {
            if(res.code === 0 ) {
                toast('THÊM MỚI THÀNH CÔNG', {type: toast.TYPE.SUCCESS});
                handleClose()
                dispatch(userAction.fetchUsers());
            } else {
                toast(res.message, {type: toast.TYPE.ERROR});
            }
        })
    };
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
      
    return (
        <Layout>
            <div className="admin-page">
                <PageHeader
                    ghost={false}
                    // onBack={() => window.history.back()}
                    title="Admin"
                    subTitle=""
                    extra={[
                        <Button key="1" type="primary" onClick={handleOpenAdd}>
                            Thêm mới
                        </Button>,
                    ]}
                >
                    <Table
                        columns={columns}
                        dataSource={listUser.data}
                        pagination={false}
                    />
                    <Modal
                        title="Thêm mới"
                        visible={state.visibleAdd}
                        onCancel={handleClose}
                        footer={null}
                    >
                        <Form name="basic" onFinish={onAdd} {...layout}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your email!",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </PageHeader>
            </div>
        </Layout>
    );
};

export default AdminPage;
