const { Brand } = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        const { name } = req.body
        try {
            const brand = await Brand.create({ name })
            return res.json(brand)
        } catch (err) {
            return next(ApiError.badRequest(`Item with name '${name}' already exists`))
        }
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async getOne(req, res) {
        const {id} = req.params
        const brand = await Brand.findByPk(id)
        return res.json(brand)
    }

    async delete(req, res, next) {
        const { id } = req.params
        try {
            const brand = await Brand.findByPk(id)
            brand.destroy()
            .then(() => {
                return res.status(204).json()
            })
        } catch (err) {
            return next(ApiError.badRequest(`No item with id ${id}`))
        }
    }
}

module.exports = new BrandController()