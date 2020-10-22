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
    console.log("passwordHash", passwordHash);
    return await User.create({
        id: 1,
        role_id: 1,
        email: params.email,
        encryptedPassword: passwordHash,
        username: params.firstName,
    })
        .then(async (result) => {
            let newUser = result;
            // const newCustomer = await Customer.create({
            //     user_id: newUser.id,
            // });
            const jwtToken = jwt.sign(
                { payload: newUser.dataValues.id },
                process.env.API_KEY,
                {
                    expiresIn: "365d",
                }
            );
            // newUser.dataValues.customer_id = newCustomer.dataValues.id;
            // newUser.dataValues.avatar_url = params.avatar_url
            return {
                success: true,
                user: newUser,
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
