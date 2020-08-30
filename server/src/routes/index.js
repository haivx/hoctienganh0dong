const express = require('express')
import user from './user'
 function routes () {
    const router = express.Router();
    router.use('/user', user());

    return router;
}

module.exports = routes;