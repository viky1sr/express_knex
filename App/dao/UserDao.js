const db = require('../../database/db');
const bcrypt = require('bcryptjs');

class UserDao {
    async createUser(firstName, lastName, email, password){
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt);
        const [id] = await db('users').insert({
            email,
            password: hash,
            first_name: firstName,
            last_name: lastName
        }).returning('id');

        return id;
    }
}

module.exports = new UserDao();