import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import configureStore from '@store'
import PostProvider from './src/providers/PostProvider'
import Userprovier from './src/providers/UserProvider'
const store = configureStore()

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Userprovier>
                <PostProvider>
                    <App />
                </PostProvider>
            </Userprovier>
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(<Root />, document.getElementById('root'))
module.hot.accept()
