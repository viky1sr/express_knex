const UserService = require('../services/UserService');
const expressAsyncHandler = require('express-async-handler');
const db = require('../../database/db');

const register = expressAsyncHandler(async (req, res) => {
    const { email, password, password_confirmation } = req.body;
    if (password !== password_confirmation) {
        res.status(422).json({
            status: false,
            message: 'Password do not match.'
        })
    }

    const userDB = await db('users').where({email: email})
        .then( row => {
            return row[0].email;
        });

    if(userDB !== undefined ) {
        res.status(422).json({
            status: false,
            message: 'Email is already registered.'
        })
    }

    const user = UserService.createUser;
    const id = await user(req.body);

    const data = await db('users').where({id:id}).then(row => {
        return row;
    });

    res.status(201).json({
        status: true,
        user: data
    });
})

module.exports = {
    register
};