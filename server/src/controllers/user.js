import db from '../models';
import userServices from "../services/userServices";
const models = db.sequelize.models;

const login = async function(req, res, next) {
    try {
        const { email, password } = req.body;
        console.log('BODY', models.User)
        const response = await models.User.login(
            email,
            password,
        );
        console.log('RESOPONSE', response)
        res.send(response)
    } catch (err) {
        console.error('errr', err)
        res.send({
            error: err
        })
    }
}

const  register = async(req, res, next) => {
    const params = req.body;
  
    userServices
      .signUp(params)
      .then(response => {
        response ? res.json(response) : res.json({});
      })
      .catch(err => next(err));
  }

module.exports = {
    login,
    register
}