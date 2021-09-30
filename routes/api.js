const express = require('express');
const validateDto = require('../App/middleware/validate-dto');
const userDto = require('../App/dto/UserDto');
const bookDto = require('../App/dto/BookDto');
const { register } = require('../App/controller/UserController');
const { store, update } = require('../App/controller/BookController')

const router = express.Router();

const api = '/api/v1';

router.route(`${api}/register`)
    .post(validateDto(userDto),register);

router.route(`${api}/book`)
    .post(validateDto(bookDto),store);

router.route(`${api}/book/:id`)
    .put(validateDto(bookDto),update);

module.exports = router;