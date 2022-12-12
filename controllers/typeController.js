const { Type } = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res, next) {
        const { name } = req.body
        try {
            const type = await Type.create({ name })
            return res.json(type)
        } catch (err) {
            return next(ApiError.badRequest(`Item with name '${name}' already exists`))
        }
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

    async getOne(req, res) {
        const {id} = req.params
        const type = await Type.findByPk(id)
        return res.json(type)
    }

    async delete(req, res, next) {
        const { id } = req.params
        try {
            const type = await Type.findByPk(id)
            type.destroy()
            .then(() => {
                return res.status(204).json()
            })
        } catch (err) {
            return next(ApiError.badRequest(`No item with id ${id}`))
        }
    }
}

module.exports = new TypeController()