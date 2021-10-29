const ApiError = require('./api-error');
const db = require('../../database/db');

async function apiErrorHandler(err, req, res, next) {
    if(req.body.email != null) {
        const { email } = req.body;
        const checkEmail = await db('users').where({email: email})
            .then( row => {
                return row;
            });
        if(checkEmail.length > 0 ) {
            res.status(401).json({
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

    return res.status(500).json('something went wrong');
}

module.exports = apiErrorHandler;