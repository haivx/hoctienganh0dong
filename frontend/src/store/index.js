import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const middleware = [thunkMiddleware]

if(process.env.NODE_ENV != 'production') {
  const logger = createLogger({
    level: 'log'
  })
  middleware.push(logger)
}

const configureStore = () => {
  return createStore(
    reducers,
    applyMiddleware(...middleware)
  )
}

export default configureStore
