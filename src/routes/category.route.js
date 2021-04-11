const express = require('express');
const router = express.Router();
const category = require('../controllers/category.controller');

router.post('/category' , category.create); 

router.get('/categorys' , category.getCategorys); 

router.get('/categorys/:id' , category.getCategory);

router.post('/categorys/update/:id' , category.updateCategory);

router.get('/categorys/delete/:id' , category.deleteCategory);


module.exports = router;