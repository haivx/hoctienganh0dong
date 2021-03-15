import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "@components/Loading";
import { Provider } from "react-redux";
import configureStore from "@store";
import { history } from "@utils/helpers";
// import Layout from "./src/components/layout";

const store = configureStore();

const AsyncPostsPage = Loadable({
    loader: () => import("@containers/admin/Posts"),
    loading: Loading,
});

const AsyncHomePage = Loadable({
    loader: () => import("@containers/landing"),
    loading: Loading,
});
// TInh trang hiẹn tai la vao cac route con nhu  /post/wrwer tach sml
const AsyncDashboardPage = React.lazy(() => import("@containers/admin/Dashboard"));

function Layout() {
    return (
        <div>
            <Switch>
            <Route exact path='/post/wrwer' component={() => <div>Fuck</div>} />
        </Switch>
        </div>
         
    )
}

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/2" component={() => <div>Fuck</div>} />
                <Route path='/'>
                    <Layout />
                </Route>
            </Switch>
            
        </Router>
    );
};
