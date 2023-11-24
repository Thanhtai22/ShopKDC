const express = require("express");
const router = express.Router()
const ProductController = require("../controllers/ProductController");
const { authMiddleWare } = require("../middleware/authmiddleware");

router.post('/create', ProductController.createProduct)
router.put('/update/:id',authMiddleWare, ProductController.updateProduct)
router.get('/getdetails/:id', ProductController.getDetailsProduct)
router.delete('/delete/:id', ProductController.deleteProduct)
router.get('/get-all',authMiddleWare, ProductController.getAllProduct)
module.exports = router