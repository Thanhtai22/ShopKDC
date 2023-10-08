const express = require("express");
const router = express.Router()
const userController = require('../controllers/UserController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authmiddleware");

router.post('/reg', userController.createUser)
router.post('/login', userController.loginUser)
// router.post('/logout', userController.logoutUser)
router.put('/update-user/:id', userController.updateUser)
router.delete('/delete-user/:id',authMiddleWare, userController.deleteUser)
router.get('/getAll',authMiddleWare, userController.getAllUser)
router.get('/get-details/:id', authUserMiddleWare, userController.getDetailsUser)
// router.post('/refresh-token', userController.refreshToken)
// router.post('/delete-many', authMiddleWare, userController.deleteMany)

module.exports = router