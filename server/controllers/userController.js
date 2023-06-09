const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Неккоретный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email ужк существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = jwt.sign(
            {id: user.id, email, role}, 
            process.env.SECRET_KEY, 
            {expiresIn: 24}
            )
            return res.json(token)
    }

    async login(req, res) {
        
    }

    async check(req, res, next) {
        const {id} = req.query
      
        if (!id) {
            return next(ApiError.badRequest("Не задан id"))
        }
        res.json(id)
    }
}

module.exports = new UserController()