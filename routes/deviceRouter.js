const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.post('/', checkRole('ADMIN'), deviceController.create)
router.delete('/:id', checkRole('ADMIN'), deviceController.delete)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router