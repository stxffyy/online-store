const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {

    //для создания типа
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    // для получения типа
    async getAll(req, res) {
        // вернет все существующие записи из бд
        const types = await Type.findAll()
        // возвращаем весь массив объектов
        return res.json(types)
    }
}

module.exports = new TypeController()