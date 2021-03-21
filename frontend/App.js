import React, {  } from 'react'
import {
    useHistory,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import 'react-toastify/dist/ReactToastify.css'
import './src/styles/index.scss'

import configureStore from '@store'
const store = configureStore()

const App = () => {
    const history = useHistory()
    return (
        <Provider store={store}>
            {routes()}
        </Provider>
    )
}

export default App
