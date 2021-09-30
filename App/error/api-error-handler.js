const ApiError = require('./api-error');

async function apiErrorHandler(err, req, res, next) {
    if(err instanceof ApiError) {
        return res.status(err.code).json({
            status: false,
            message: err.message.errors.toString()
        });
    }

    return res.status(500).json('something went wrong');
}

module.exports = apiErrorHandler;