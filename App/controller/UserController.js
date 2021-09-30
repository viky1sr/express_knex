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

module.exports = {
    register,
    updateUser
};