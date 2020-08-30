import express from 'express'
import { login } from '../controllers/user';
import  middlewareApiKey from '../middleware/checkApikey';
import middlewareAuthToken from '../middleware/authToken';

// console.log('LOGIN', userController.login)
export default function () {
    const router = express.Router();
    router.get("/login", (req, res, next) => { next()}, login);
    // router.post("/updateUser", middlewareApiKey.checkApiKey, userController.updateUser);
    // router.delete("/:id", middlewareApiKey.checkApiKey, middlewareAuthToken.verifyToken, (req, res, next) => {
    //     res.send("delete");
    // });

    return router;
}

// module.exports = user;