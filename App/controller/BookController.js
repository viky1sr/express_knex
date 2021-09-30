const BookService = require('../services/BookService');
const expressAsyncHandler = require('express-async-handler');
const db = require('../../database/db');

const store = expressAsyncHandler( async (req, res, next) => {
    const book = BookService.createBook;
    const id = await book(req.body);
    const data = await db('books').where({id:id}).then( row => {
        return row;
    })

    res.status(201).json({
        status: true,
        book: data
    });
});

const update = expressAsyncHandler( async (req, res, next) => {
    const book = BookService.updateBook;

    const id = await book({
        Id: req.params.id,
        nameBook: req.body.nameBook
    });

    const dataUpdate = await db('books').where({id}).then( row => {
        return row;
    })

    res.status(201).json({
        status: true,
        book: dataUpdate
    });
})

module.exports = {
    store,
    update
}