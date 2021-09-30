const express = require('express');
const validateDto = require('../App/middleware/validate-dto');
const userDto = require('../App/dto/UserDto');
const bookDto = require('../App/dto/BookDto');
const { register, updateUser } = require('../App/controller/UserController');
const { store, update } = require('../App/controller/BookController')

const router = express.Router();

const api = '/api/v1';

router.route(`${api}/user`)
    .post(validateDto(userDto),register);

router.route(`${api}/user/:id`)
    .put(validateDto(userDto),updateUser);

router.route(`${api}/book`)
    .post(validateDto(bookDto),store);

router.route(`${api}/book/:id`)
    .put(validateDto(bookDto),update);

module.exports = router;