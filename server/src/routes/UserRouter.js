const express = require ("express");
const router = express.Router()
const UserRouter = require('../controllers/UserController')

router.post('/regsister', UserRouter.createUser)
router.post('/login', UserRouter.loginUser)

module.exports = router
