import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import db from "../models";

const models = db.sequelize.models;

async function verifyToken(req, res, next) {
    const token = req.headers["authorization"];

    if (!token)
        return res.status(403).send({
            success: false,
            message: "No token provided",
        });

    jwt.verify(token, process.env.API_KEY, async (err, decoded) => {
        if (err) {
            return res.json({
                success: false,
                message: "Failed to authenticate token",
            });
        } else {
            let currentUser = await models.User.findOne({
                wher: { id: decoded.payload },
            });

            req.currentUser = currentUser;
            req.currentCustomer = await currentUser.getCustomer();
            next();
        }
    });
}

export default {
    verifyToken,
};
