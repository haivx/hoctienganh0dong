import db from '../models';
const models = db.sequelize.models;

export const login = async function(req, res, next) {
    // const { email, password } = req.body;
    // const response = await models.User.login({
    //     email,
    //     password,
    // });
    res.json({
        a: 1
    });
}

// export default {
//     login
// };