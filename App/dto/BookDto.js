const yup = require('yup');

module.exports = yup.object().shape({
    nameBook: yup.string().trim().required()
});