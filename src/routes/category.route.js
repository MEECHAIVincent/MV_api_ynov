const express = require('express');
const router = express.Router();
const category = require('../controllers/category.controller');

router.post('/category' , category.create); 
router.get('/categorys' , category.getCategorys); 
router.get('/categorys/:id' , category.getCategory); 

module.exports = router;