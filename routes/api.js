const express = require('express');
const validateDto = require('../App/middleware/validate-dto');
const userDto = require('../App/dto/UserDto');
const bookDto = require('../App/dto/BookDto');
const userHasBookDto = require('../App/dto/UserHasBooksDto');
const { register, updateUser, findUser, getAllUsers } = require('../App/controller/UserController');
const { store: storeBook, update: updateBook, findBook, getAllBooks } = require('../App/controller/BookController')
const {
    store: storeUserBook,
    update: updateUserBook ,
    findById: findUserBook,
    getAll: getAllUserBook
} = require('../App/controller/UserHasBooksController');

const router = express.Router();

const api = '/api/v1';

router.route(`${api}/users`)
    .post(validateDto(userDto),register)
    .get(getAllUsers);

router.route(`${api}/user/:id`)
    .put(validateDto(userDto),updateUser)
    .get(findUser);

router.route(`${api}/books`)
    .post(validateDto(bookDto),storeBook)
    .get(getAllBooks);

router.route(`${api}/book/:id`)
    .put(validateDto(bookDto),updateBook)
    .get(findBook);

router.route(`${api}/user-book/:user_id/:id`)
    .put(validateDto(userHasBookDto),updateUserBook)
    .get(findUserBook);

router.route(`${api}/user-books/:user_id`)
    .post(validateDto(userHasBookDto),storeUserBook)
    .get(getAllUserBook);

module.exports = router;