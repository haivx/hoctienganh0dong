import db from '../models';
const models = db.sequelize.models;

const login = async function(req, res, next) {
    const { email, password } = req.body;
    console.log('BODY', models.User)
    const response = await models.User.login(
        email,
        password,
    );
    console.log('RESOPONSE', response)
    res.send({
        a: 123
    })
}

module.exports = {
    login
}