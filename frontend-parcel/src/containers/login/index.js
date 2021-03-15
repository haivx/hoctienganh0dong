import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signInWithGoogle, authFirebase } from "~/src/config/firebase";
import { createUserProfileDocument } from '~/src/config/firebase'

import API from "~/src/utils/API";

const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [error, setError] = useState("");

    let unsubscribeFromAuth = null;
    useEffect(() => {
        async function auth() {
            unsubscribeFromAuth = authFirebase.onAuthStateChanged( async (userAuth) => {
                const user = await createUserProfileDocument(userAuth)
                if (user) {
                    const data = {
                        accessToken: user.refreshToken,
                        uid: user.uid,
                         email: user.email,
                        displayName: user.displayName,
                    };
                    localStorage.setItem("auth", JSON.stringify(data));
                    history.push("/admin/dashboard");
                }
            });
        }
        auth();
        return () => unsubscribeFromAuth();
    }, []);

    const onLogin = () => {}
    ({ email, password }) => {
        API.post("auth/login", { email, password }, (res, err) => {
            if (res.code !== 0) {
                setError(res.message);
                toast(res.message || "Thông tin đăng nhập không đúng", { type: toast.TYPE.ERROR });
            } else {
                const auth = res.data;
                const currentUser = { ...auth.user, company: auth.company };
                dispatch({ type: "LOGIN", currentUser });
                localStorage.setItem("auth", JSON.stringify(res.data));
                toast("ĐĂNG NHẬP THÀNH CÔNG", { type: toast.TYPE.SUCCESS });
                history.push("/admin");
            }
        });
    };

    return (
        <div className="login-form flex min-h-screen items-center text-center justify-center">
            <Form name="normal_login" className="login-form w-2/6" initialValues={{ remember: true }} onFinish={onLogin}>
                <Form.Item name="email" rules={[{ required: true, message: "Please input your Email!" }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="mt-3 mr-1 login-form-button w-2/6">
                        Log in
                    </Button>
                    <Button type="primary" onClick={signInWithGoogle} className="mt-3 ml-1 login-form-button w-2/6">
                        Sign in with Google
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;
