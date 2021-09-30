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

const findBook = expressAsyncHandler( async (req, res,next) => {
    const book = BookService.findById;
    const data = await book({
        Id: req.params.id,
    });

    if (data === undefined) {
        return res.status(422).json({
            status: false,
            message: 'book id is not exist'
        })
    }

    res.status(200).json({
        status: true,
        book: data
    });
});

const getAllBooks = expressAsyncHandler( async (req, res , next) => {
    const books = await BookService.getAll();

    if (books.length < 0) {
        return res.status(422).json({
            status: false,
            message: 'empty book'
        })
    }

    res.status(200).json({
        status: true,
        books: books
    })
})

module.exports = {
    store,
    update,
    findBook,
    getAllBooks
}