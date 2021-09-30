const yup = require('yup');

module.exports = yup.object().shape({
    email: yup.string().required().email(),
    firstName: yup.string().trim().required(),
    lastName: yup.string().trim().required(),
    password: yup.string().trim().required().min(8).max(15).matches(  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&-.])[0-9a-zA-Z@$!%*#?&]{8,}$/ , 'Password must be 8-15 characters and include both numbers and letters'),
});