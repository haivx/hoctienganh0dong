import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd'
import Layout from '@components/layout'
import './index.scss'

const PostsPage = () => {
    const [state, _setState] = useState({
        post: {},
        posts: [],
    })
    const setState = (data) => {
        _setState({
            ...state,
            ...data,
        })
    }

    const handleCreate = async () => {
        const { post } = state
        const auth = JSON.parse(localStorage.getItem('auth'))
        const newPost = {
            ...post,
            user: {
                uid: auth.uid,
                email: auth.email,
                displayName: auth.displayName,
            },
        }
    }

    const handleDelete = (id) => async (value) => {}

    const onChange = (type) => (e) => {
        setState({
            post: {
                ...state.post,
                [type]: e.target.value,
            },
        })
    }

    return (
        <Layout>
            <div className="posts-page">
                <h1>Think in pieces</h1>
                <Input placeholder="title" onChange={onChange('title')} />
                <Input placeholder="body" onChange={onChange('content')} />
                <div>
                    <Button className="add" onClick={handleCreate}>
                        Create post
                    </Button>
                </div>
                <div className="post">
                    {state.posts.map((item) => (
                        <div key={item.id}>
                            <div className="post__content">{item.title}</div>
                            <div className="post__desc">
                                <textarea rows={3}>{item.content}</textarea>
                            </div>
                            <div className="post__action">
                                <Button onClick={handleDelete(item.id)}>
                                    Delete
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
export default PostsPage
