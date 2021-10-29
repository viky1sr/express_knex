const yup = require('yup');

module.exports = yup.object().shape({
    userId: yup.number().required().positive().integer(),
    bookId: yup.number().required().positive().integer(),
});