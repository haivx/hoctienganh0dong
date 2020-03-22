import React, { Fragment } from "react";
import routes from './routes';
import './src/styles/index.scss';

const App = () => {
    return <Fragment>{routes()}</Fragment>
}

export default App;