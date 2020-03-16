import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "Components/Loading/index.jsx";

const AsyncHomePage = Loadable({
    loader: () => import("Containers/Homepage"),
    loading: Loading
});

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={AsyncHomePage} />
            </Switch>
        </Router>
    );
};
