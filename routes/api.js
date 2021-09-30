const express = require('express');
const validateDto = require('../App/middleware/validate-dto');
const userDto = require('../App/dto/UserDto');
const bookDto = require('../App/dto/BookDto');
const { register, updateUser, findUser, getAllUsers } = require('../App/controller/UserController');
const { store, update, findBook, getAllBooks } = require('../App/controller/BookController')

const router = express.Router();

const api = '/api/v1';

router.route(`${api}/users`)
    .post(validateDto(userDto),register)
    .get(getAllUsers)
    ;

router.route(`${api}/user/:id`)
    .put(validateDto(userDto),updateUser)
    .get(findUser);

router.route(`${api}/books`)
    .post(validateDto(bookDto),store)
    .get(getAllBooks);

router.route(`${api}/book/:id`)
    .put(validateDto(bookDto),update)
    .get(findBook);

module.exports = router;