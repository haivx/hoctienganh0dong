import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { jwt } from './actions/authAction';
const middleware = [jwt , thunkMiddleware]

if(process.env.NODE_ENV != 'production') {
  const logger = createLogger({
    level: 'log'
  })
  middleware.push(logger)
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const configureStore = () => {
  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
  )
}

export default configureStore
