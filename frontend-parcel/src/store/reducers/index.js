import { combineReducers } from "redux";
import user from "./userReducer";
import app from "./appReducer";

const appReducers = combineReducers({
    app,
    user,
});

const reducers = (state, action) => {
    if (action.type === "LOGOUT") {
        state = undefined;
    }

    return appReducers(state, action);
};

export default reducers;
