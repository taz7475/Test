const express = require('express')
const router = express.Router()
const {getAllProducts , getAllProductsById} = require('../controllers/ProductController')

//desc GET all Products from db to
//route GET /api/products
//access Public
router.get('/' , getAllProducts)
//desc GET all Products by id from db to
//route GET /api/products/ :id
//access Public
router.get('/:id' , getAllProductsById)
module.exports = router