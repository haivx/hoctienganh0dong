import { Op } from "sequelize";
import isEmpty from "lodash/isEmpty";
import db from "../models";
import userServices from "../services/userServices";
const models = db.sequelize.models;

const login = async function (req, res, next) {
    try {
        const { email, password } = req.body;
        const response = await models.User.login(email, password);
        res.send(response);
    } catch (err) {
        console.error("errr", err);
        res.send({
            error: err,
        });
    }
};

const register = async (req, res, next) => {
    const params = req.body;

    userServices
        .signUp(params)
        .then((response) => {
            response ? res.json(response) : res.json({});
        })
        .catch((err) => next(err));
};

const listUser = async (req, res, next) => {
    try {
        const query = req.query;

        if (!isEmpty(query)) {
            console.log('query.full_name', query.full_name)
            let filter = {};
            if (query.full_name) {
                filter = {
                    full_name: {
                        [Op.like]: query.full_name,
                    },
                };
            }
            const response = await models.User.findAndCountAll({
                where: filter,
                offset: 100,
                limit: 100,
            });
            res.send(response);
            return;
        } 
        const response = await models.User.findAll();
        console.log("RES", response);
        res.send({
            code: 0,
            data: response,
            page: query.page || 0,
            size: query.size || 10,
            totalElements: response.length,
        });
    } catch (err) {
        res.send({
            code: -1,
            error: err.message,
        });
    }
};

module.exports = {
    login,
    register,
    listUser,
};
