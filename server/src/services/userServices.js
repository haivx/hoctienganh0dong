const { User } = require("../models");
import Sequelize, { Op } from "sequelize";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

async function signUp(params) {
    let passwordHash;
    if (!!params.password) {
        const salt = bcrypt.genSaltSync(10);
        passwordHash = bcrypt.hashSync(params.password, salt);
    }

    return await User.create({
        role_id: 1,
        email: params.email,
        encryptedPassword: passwordHash,
        username: params.firstName,
    })
        .then(async (result) => {
            let newUser = result;
            const jwtToken = jwt.sign(
                { payload: newUser.dataValues.id },
                process.env.API_KEY,
                {
                    expiresIn: "365d",
                }
            );
            return {
                success: true,
                user: {
                    avatar: newUser.avatar,
                    mail: newUser.email,
                    full_name: newUser.full_name   
                },
                token: jwtToken,
            };
        })
        .catch(Sequelize.ValidationError, (error) => {
            return {
                errors: [error.errors[0].message],
            };
        });
}

export default {
    signUp,
};
