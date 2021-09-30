const ApiError = require('../error/api-error');

function validateDto(schema) {
    return async (req, res, next) => {
        try {
            const validateBody = await schema.validate(req.body);
            req.body = validateBody;
            next();
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }
}

module.exports = validateDto;