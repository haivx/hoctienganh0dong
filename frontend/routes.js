import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "Components/Loading/index.jsx";
// @TODO: Authentication by onEnter func in react router dom
const AsyncLoginPage = Loadable({
    loader: () => import("Containers/LoginPage"),
    loading: Loading
});

const AsyncHomePage = Loadable({
    loader: () => import("Containers/Homepage"),
    loading: Loading
})
const AsyncAdminPage = Loadable({
    loader: () => import("Containers/AdminPage"),
    loading: Loading
});;

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={AsyncHomePage} />
                <Route exact path="/login" component={AsyncLoginPage} />
                <Route exact path="/admin" component={AsyncAdminPage} />
            </Switch>
        </Router>
    );
};
