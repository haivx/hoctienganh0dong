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

    const existRecord = await User.findOne({ email: params.email })


    if(existRecord.id) {
        return {
            code: -1,
            message: 'Email is exist!'
        }
    }
    return await User.create({
        role_id: 1,
        email: params.email,
        encryptedPassword: passwordHash,
        username: params.firstName,
    })
        .then(async (result) => {
            return {
                code: 0,
                success: true,
                user: {
                    avatar: result.avatar,
                    mail: result.email,
                    full_name: result.full_name   
                },
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
