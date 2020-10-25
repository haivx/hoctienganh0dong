
import { combineReducers } from 'redux'
import user from './userReducer'

const appReducers = combineReducers({
    user
  })
  
  const reducers = (state, action) => {
    if (action.type === "LOGOUT") {
      state = undefined
    }
  
    return appReducers(state, action)
  }
  
  export default reducers
  