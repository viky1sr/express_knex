const BookService = require('../services/BookService');
const expressAsyncHandler = require('express-async-handler');
const db = require('../../database/db');

const store = expressAsyncHandler( async (req, res, next) => {
    const book = BookService.createBook;
    const data = await book(req.body);
    res.status(201).json({
        status: true,
        book: data
    });
});

const update = expressAsyncHandler( async (req, res, next) => {
    const book = BookService.updateBook;
    const data = await book({
        Id: req.params.id,
        nameBook: req.body.nameBook
    });

    res.status(201).json({
        status: true,
        book: data
    });
})

module.exports = {
    store,
    update
}