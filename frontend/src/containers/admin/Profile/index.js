import React from 'react'
import { Row, Col } from 'antd'
import { UserContext } from '@providers/UserProvider'
import { storage } from '@config/firebase'
import './profile.scss'

const Profile = () => {
    const handleOnchange = (e) => {
        console.log('e123', e.target)
    }
    let imageInput = null
    const handleSubmit = (e) => {
        e.preventDefault()

        if (file) {
            storage
                .ref()
                .child('user-profiles')
                .child(this.uid)
                .child(this.file.name)
                .put(this.file)
                .then(response => response.ref.getDownloadURL())
                .then(photoURL => this.userRef.update())
        }
    }

    const file = () => {
        return imageInput && imageInput.files[0]
    }

    return (
        <UserContext.Consumer>
            {(user) => {
                console.log('userrr', user)
                return (
                    <>
                        <Row gutter={12}>
                            <Col span={12}>
                                <img src={user.photoURL} alt="" />
                            </Col>
                            <Col span={12}>
                                <p>Name: {user.displayName}</p>
                                <p>Email: {user.email}</p>
                            </Col>
                        </Row>
                        <Row gutter={12}>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    onChange={handleOnchange}
                                />
                            </form>
                        </Row>
                    </>
                )
            }}
        </UserContext.Consumer>
    )
}

export default Profile
