const { Basket, BasketDevice } = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
    async getAll(req, res) {
        const baskets = await Basket.findAll()
        return res.json(baskets)
    }

    async getOne(req, res) {
        const { id } = req.params
        const basket = await Basket.findOne({ where: { userId: id }, include: [{ model: BasketDevice, as: 'info' }] })
        return res.json(basket)
    }

    async deleteDevice(req, res) {
        const { id } = req.params
        const idD = id.split("_")
        const basket = await Basket.findOne({ where: { userId: idD[1] } })
        const basketDevice = await BasketDevice.findOne({where: {basketId: basket.id, deviceId: idD[0]}})
        basketDevice.destroy().then(() => {
            return res.status(204).json()
        })
    }

    async addDevice(req, res, next) {
        const { userId, deviceId } = req.body
        const basket = await Basket.findOne({ where: { userId } })
        BasketDevice.create({
            basketId: basket.id,
            deviceId: deviceId
        })
        return res.json(basket)
    }
}

module.exports = new BasketController()