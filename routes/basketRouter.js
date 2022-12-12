const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.get('/', basketController.getAll)
router.get('/:id', basketController.getOne)
router.delete('/:id', basketController.deleteDevice)
router.post('/', basketController.addDevice)

module.exports = router