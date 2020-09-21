const express = require('express')
import auth from './auth'
 function routes () {
    const router = express.Router();
    router.use('/auth', auth());

    return router;
}

module.exports = routes;