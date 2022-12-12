const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.post('/', checkRole('ADMIN'), brandController.create)
router.delete('/:id', checkRole('ADMIN'), brandController.delete)
router.get('/', brandController.getAll)
router.get('/:id', brandController.getOne)

module.exports = router