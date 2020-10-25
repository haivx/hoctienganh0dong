import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "Components/Loading/index.jsx";
import { Provider } from "react-redux";
import configureStore from "Store";
import { history } from "Utils/helpers";
const store = configureStore();

const AsyncLoginPage = Loadable({
    loader: () => import("Containers/LoginPage"),
    loading: Loading,
});

const AsyncHomePage = Loadable({
    loader: () => import("Containers/Homepage"),
    loading: Loading,
});
const AsyncAdminPage = Loadable({
    loader: () => import("Containers/AdminPage"),
    loading: Loading,
});

export default () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={AsyncHomePage} />
                    <Route exact path="/login" component={AsyncLoginPage} />
                    <Route exact path="/admin" component={AsyncAdminPage} />
                </Switch>
            </Router>
        </Provider>
    );
};
