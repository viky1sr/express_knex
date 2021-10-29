const UserHasBooksService = require('../services/UserHasBooksService');
const expressAsyncHandler = require('express-async-handler');
const UserService = require('../services/UserService');
const BookService = require('../services/BookService');
const db = require('../../database/db');

const store = expressAsyncHandler( async (req, res, next) => {
    const user = await UserService.findById({
        Id: req.body.userId
    });
    if( user == undefined ) {
        res.status(404).json({
            status: false,
            messages: 'user is not found please select another user'
        });
    }

    const book = await BookService.findById({
        Id: req.body.bookId
    });
    if( book == undefined ) {
        res.status(404).json({
            status: false,
            messages: 'book is not found please select another book'
        });
    }

    const userHasBooks = UserHasBooksService.createUserHasBooks;
    const data = await userHasBooks({
        BookId: book.id,
        UserId: user.id
    });
    const result = {
        Id: data.id,
        UserName: `${user.first_name} ${user.last_name}`,
        BookName: book.name_book,
        CreatedAt: data.created_at,
        UpdatedAt: data.updated_at
    }

    res.status(201).json( {
        status: true,
        data: result
    });
})

const update = expressAsyncHandler( async (req, res, next) => {
    const user = await UserService.findById({
        Id: req.params.user_id
    });
    const book = await BookService.findById({
        Id: req.body.bookId
    });
    if( book == undefined ) {
        res.status(404).json({
            status: false,
            messages: 'book is not found please select another book'
        });
    }

    const userHasBooks = UserHasBooksService.updateUserHasBooks;

    const data = await userHasBooks({
        Id: req.params.id,
        bookId: req.body.bookId,
        userId: user.id
    });

    if (data === undefined) {
        return res.status(422).json({
            status: false,
            message: 'your book is not exist'
        })
    } else {
        const result = {
            Id: data.id,
            UserName: `${user.first_name} ${user.last_name}`,
            BookName: book.name_book,
            CreatedAt: data.created_at,
            UpdatedAt: data.updated_at
        }

        res.status(200).json({
            status: true,
            data: result
        });
    }

});

const findById = expressAsyncHandler( async (req, res, next) => {
    const userHasBooks = UserHasBooksService.findById;
    const data = await userHasBooks({
        Id: req.params.id,
        userId: req.params.user_id
    });

    if (data === undefined) {
        return res.status(422).json({
            status: false,
            message: 'your book is not exist'
        })
    } else {
        const user = await UserService.findById({
            Id: data.user_id
        });
        const book = await BookService.findById({
           Id: data.book_id
        });
        const result = {
            Id: data.id,
            UserName: `${user.first_name} ${user.last_name}`,
            BookName: book.name_book,
            CreatedAt: data.created_at,
            UpdatedAt: data.updated_at
        }

        res.status(200).json({
            status: true,
            data: result
        });
    }
});

const getAll = expressAsyncHandler( async (req, res, next) => {
    const data = await UserHasBooksService.getAll({
        userId: req.params.user_id
    });

    if (data.length === 0)  {
        return res.status(422).json({
            status: false,
            message: 'your book is empty'
        })
    } else {
        const result =  await Promise.all(data.map( async (rows) => {
            const user = await UserService.findById({Id:req.params.user_id});
            const book = await BookService.findById({Id: rows.book_id});

            return {
                Id: rows.id,
                UserName: `${user.first_name} ${user.last_name}`,
                BookName: book.name_book,
                CreatedAt: rows.created_at,
                UpdatedAt: rows.updated_at
            }
        }))

        res.status(200).json({
            status: true,
            total: data.length,
            data: result
        });
    }
})

module.exports = {
    store,
    update,
    findById,
    getAll
}