import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { Table, Button, PageHeader, Modal, Form, Input } from 'antd'
import Layout from '@components/layout'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import userAction from '@action/userAction'
import Api from '@utils/api'

import './index.scss'

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        email: 'job@gmail.com',
        roles: 'mod',
        phone: '0989838891',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        email: 'job@gmail.com',
        roles: 'admin',
        phone: '0989838891',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        email: 'job@gmail.com',
        roles: 'admin',
        phone: '0989838891',
    },
]

const AdminPage = () => {
    const dispatch = useDispatch()
    const listUser = useSelector((state) => state.user)
    const [state, setState] = useState({
        visibleAdd: false,
    })

    const _setState = (data) => {
        setState((prevState) => ({
            ...prevState,
            ...data,
        }))
    }

    useEffect(() => {
        dispatch(userAction.fetchUsers())
    }, [dispatch])

    const columns = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
            width: 50,
        },
        {
            title: 'Full Name',
            dataIndex: 'full_name',
            key: 'full_name',
            width: 150,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 150,
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            width: 100,
        },
        {
            title: 'Roles',
            dataIndex: 'roles',
            key: 'roles',
            width: 200,
        },
        {
            title: 'Action',
            key: 'action',
            width: 80,
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
    ]
    const handleOpenAdd = () => {
        _setState({
            visibleAdd: true,
        })
    }

    const handleClose = () => {
        _setState({
            visibleAdd: false,
        })
    }
    const onAdd = (value) => {
        Api.post(`auth/register`, value, (res, error) => {
            if (res?.code === 0) {
                toast('THÊM MỚI THÀNH CÔNG', { type: toast.TYPE.SUCCESS })
                handleClose()
                dispatch(userAction.fetchUsers())
            } else {
                toast(res.message, { type: toast.TYPE.ERROR })
            }
        })
    }
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    }
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    }

    return (
        <Layout>
            <div className="admin-page">
                <PageHeader
                    ghost={false}
                    // onBack={() => window.history.back()}
                    title="Danh sách tài khoản"
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
                        bordered
                    />
                    <Modal
                        className="modal-add-user"
                        title="Thêm mới"
                        visible={state.visibleAdd}
                        onCancel={handleClose}
                        footer={null}
                    >
                        <Form name="basic" onFinish={onAdd} {...layout}>
                            <Form.Item
                                label="FullName"
                                name="fullName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input fullName!',
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
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Phone"
                                name="Phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input phone!',
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
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                <Button type="danger" onClick={handleClose}>
                                    Cancel
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </PageHeader>
            </div>
        </Layout>
    )
}

export default AdminPage
