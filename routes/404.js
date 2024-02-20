const express = require('express');
const path = require('path');
const router = express.Router();

const productController = require('../controllers/error');

router.use(productController.getPageNotFound);


module.exports = router;