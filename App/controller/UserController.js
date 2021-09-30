const UserService = require('../services/UserService');
const expressAsyncHandler = require('express-async-handler');

const register = expressAsyncHandler(async (req, res) => {
    const user = UserService.createUser;
    const data = await user(req.body);

    res.status(201).json({
        status: true,
        user: data
    });
})

const updateUser = expressAsyncHandler(async (req, res, next) => {
    const user = UserService.updateUser;
    const data = await user({
        Id: req.params.id,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });

    res.status(201).json({
        status: true,
        user: data
    });
});

const findUser = expressAsyncHandler(async (req, res, next) => {
    const user = UserService.findById;
    const data = await user({
        Id: req.params.id,
    })

    if (data === undefined) {
        return res.status(422).json({
            status: false,
            message: 'user id is not exist'
        })
    }

    res.status(200).json({
        status: true,
        user: data
    });
})

const getAllUsers = expressAsyncHandler(async (req, res, next) => {
    const users = await UserService.getAll();

    if (users.length < 0) {
        return res.status(422).json({
            status: false,
            message: 'empty user'
        })
    }

    res.status(200).json({
        status: true,
        users: users
    })
})

module.exports = {
    register,
    updateUser,
    findUser,
    getAllUsers
};