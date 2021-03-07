import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { firestore } from "../../../config/firebase";
import Layout from "../../components/layout";
import "./index.scss";
import { collectIdsAndDocs } from "../../../utils";

const PostsPage = () => {
    let unsubscribe = null;
    const [state, _setState] = useState({
        posts: [],
        post: {},
        users: null,
    });
    const { posts } = state;
    const setState = (data) => {
        _setState({
            ...state,
            ...data,
        });
    };
    useEffect(() => {
        async function fetchData() {
            unsubscribe = await firestore.collection("posts").onSnapshot((querySnapshot) => {
                const posts = querySnapshot.docs.map(collectIdsAndDocs);
                setState({
                    posts,
                });
            });
        }
        fetchData();

        return () => unsubscribe();
    }, []);

    const handleCreate = async () => {
        const { post } = state;
        await firestore.collection("posts").add(post);
    };

    const handleDelete = (id) => async (value) => {
        await firestore.doc(`posts/${id}`).delete();
    };

    const onChange = (type) => (e) => {
        setState({
            post: {
                ...state.post,
                [type]: e.target.value,
            },
        });
    };

    return (
        <Layout>
            <div className="posts-page">
                <h1>Think in pieces</h1>
                <Input placeholder="title" onChange={onChange("title")} />
                <Input placeholder="body" onChange={onChange("content")} />
                <div>
                    <Button className="add" onClick={handleCreate}>
                        Create post
                    </Button>
                </div>
                <div className="post">
                    {posts.map((item) => (
                        <div key={item.id}>
                            <div className="post__content">{item.title}</div>
                            <div className="post__desc">
                                <textarea rows={3}>{item.content}</textarea>
                            </div>
                            <div className="post__action">
                                <Button onClick={handleDelete(item.id)}>Delete</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};
export default PostsPage;
