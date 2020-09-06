import express from 'express'
const userController = require('../controllers/user')
const middlewareApiKey = require('../middleware/checkApikey')
import middlewareAuthToken from '../middleware/authToken';

// console.log('LOGIN', userController.login)
export default function () {
    const router = express.Router();
    router.post("/login", middlewareApiKey, userController.login);
    // router.post("/updateUser", middlewareApiKey.checkApiKey, userController.updateUser);
    // router.delete("/:id", middlewareApiKey.checkApiKey, middlewareAuthToken.verifyToken, (req, res, next) => {
    //     res.send("delete");
    // });

    return router;
}

// module.exports = user;