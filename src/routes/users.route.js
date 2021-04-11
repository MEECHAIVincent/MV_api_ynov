const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controller');
const verifyToken = require('../middlewares/verifyToken');
const userSchemaValidation = require('../middlewares/validators/users.validator');

router.post('/user', userSchemaValidation ,user.create);

router.post('/user/create', userSchemaValidation, user.addAdmin );

router.post('/user/login', user.login);

router.post('/user/update/:id', user.updateUser);

router.get('/user/:id', verifyToken, user.findOne);

router.get('/users', user.findAll);

router.get('/users/remove/:id', user.deleteUser)

module.exports = router;