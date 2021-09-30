const ApiError = require('./api-error');
const db = require('../../database/db');

async function apiErrorHandler(err, req, res, next) {
    if(req.body.email != null) {
        const { email, password, password_confirmation } = req.body;

        if (password !== password_confirmation) {
            res.status(422).json({
                status: false,
                message: 'Password do not match.'
            })
        }

        const checkEmail = await db('users').where({email: email})
            .then( row => {
                console.log(row);
                return row[0].email;
            });

        if(checkEmail !== undefined ) {
            res.status(422).json({
                status: false,
                message: 'Email is already registered.'
            })
        }
    }


    if(err instanceof ApiError) {
        return res.status(err.code).json({
            status: false,
            message: err.message.errors.toString()
        });
    }

    console.log(err);

    return res.status(500).json('something went wrong');
}

module.exports = apiErrorHandler;