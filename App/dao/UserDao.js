const db = require('../../database/db');
const bcrypt = require('bcryptjs');

class UserDao {
    async createUser(firstName, lastName, email, password){
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt);
        const [data] = await db('users').insert({
            email,
            password: hash,
            first_name: firstName,
            last_name: lastName
        }).returning('*');

        return data;
    }

    async updateUser(firstName, lastName, email, password, Id) {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt);
        const [data] = await db('users').where({id: Id}).update({
            email,
            password: hash,
            first_name: firstName,
            last_name: lastName
        }).returning('*');

        return data;
    }
}

module.exports = new UserDao();