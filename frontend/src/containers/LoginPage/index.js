import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginPage = () => {
    const onLogin = values => {
        console.log("values", values);
    };

    return (
        <div className="login-form flex min-h-screen items-center text-center justify-center">
            <Form name="normal_login" className="login-form w-2/6" initialValues={{ remember: true }} onFinish={onLogin}>
                <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="mt-3 login-form-button w-2/6">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;
