import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MD5 from "crypto-js/md5";
import { toast } from 'react-toastify'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import API from '@utils/api'

const LoginPage = () => {
    const [user, setCurrentUser] = useState(null)
    const dispatch = useDispatch()
    const history = useHistory()
    const [error, setError] = useState('')
    const onLogin = ({ email, password }) => {
        API.post('auth/login', { email, password: MD5(password).toString() }, (res, err) => {
            if (res?.code !== 0) {
                setError(res?.message)
                toast(res?.message || 'Thông tin đăng nhập không đúng', {
                    type: toast.TYPE.ERROR,
                })
            } else {
                const auth = res.data
                const currentUser = { ...auth.user, company: auth.company }
                dispatch({ type: 'LOGIN', currentUser })
                localStorage.setItem('auth', JSON.stringify(res.data))
                toast('ĐĂNG NHẬP THÀNH CÔNG', { type: toast.TYPE.SUCCESS })
                // history.push("/admin/dashboard");
            }
        })
    }

    return (
        <div className="login-form flex min-h-screen items-center text-center justify-center">
            <Form
                name="normal_login"
                className="login-form w-2/6"
                initialValues={{ remember: true }}
                onFinish={onLogin}
            >
                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your Email!' },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="mt-3 mr-1 login-form-button w-2/6"
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginPage
