import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

import API from "Utils/API";

const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [error, setError] = useState("");
    const onLogin = ({ email, password }) => {
        console.log("values", { email, password });
        API.post("auth/login", { email, password }, (res, err) => {
            if (res.code !== 0) {
                setError(res.message);
                toast(res.message, {type: toast.TYPE.ERROR})
            } else {
                const auth = res.data;
                const currentUser = { ...auth.user, company: auth.company };
                dispatch({ type: "LOGIN", currentUser });
                localStorage.setItem("auth", JSON.stringify(res.data));
                toast('ĐĂNG NHẬP THÀNH CÔNG', {type: toast.TYPE.SUCCESS})
                history.push('/admin')
            }
        });
    };

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
                        { required: true, message: "Please input your Email!" },
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
                            message: "Please input your Password!",
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
                        className="mt-3 login-form-button w-2/6"
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;
