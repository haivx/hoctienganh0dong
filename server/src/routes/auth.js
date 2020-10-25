import express from 'express'
const userController = require('../controllers/user')
const middlewareApiKey = require('../middleware/checkApikey')
import middlewareAuthToken from '../middleware/authToken';

export default function () {
    const router = express.Router();
    router.post("/login", userController.login);
    router.post("/register", userController.register);
    router.get("/list-user", userController.listUser);
    // router.post("/updateUser", middlewareApiKey.checkApiKey, userController.updateUser);
    // router.delete("/:id", middlewareApiKey.checkApiKey, middlewareAuthToken.verifyToken, (req, res, next) => {
    //     res.send("delete");
    // });

    return router;
}