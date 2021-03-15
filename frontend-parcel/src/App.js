import React, { Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import Loadable from "react-loadable";
import { Router, Route, Switch } from "react-router-dom";
// import Loading from "@components/Loading";
import { Provider } from "react-redux";
import configureStore from "~/src/store";
import { history } from "./utils/helpers";
import Layout from './components/Layout';
const Loading = <div>Loading</div>
const store = configureStore();

// const AsyncLoginPage = Loadable({
//     loader: () => import("~/src/containers/login"),
//     loading: Loading,
// });
import AsyncLoginPage from '~/src/containers/login'
// const AsyncLoginPage = React.lazy(() => import("~/src/containers/login"));
const App = () => {
    return (
        <Fragment>
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path="/login" component={AsyncLoginPage} />
                        <Route path="/" component={Layout} />
                    </Switch>
                </Router>
            </Provider>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Fragment>
    );
};

export default App;
