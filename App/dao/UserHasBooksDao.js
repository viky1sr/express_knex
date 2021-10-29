const db = require('../../database/db');

class UserHasBooksDao {
    async createUserBook(userId,bookId){
        const [data] = await db('user_books').insert({
            user_id: userId,
            book_id: bookId
        }).returning('*');

        return data;
    }

    async updateUserBook(userId,bookId, Id) {
        const [data] = await db('user_books').where({id: Id}).where({user_id: userId}).update({
            user_id: userId,
            book_id: bookId
        }).returning('*');

        return data;
    }

    async findById(Id, userId){
        const [data] = await db('user_books').where({id: Id}).where({user_id: userId}).select('*');
        return data;
    }

    async getAllUserHasBooks(userId) {
        const data = await db('user_books').where({user_id: userId}).select('*').then(rows => {
            return rows;
        });

        return data;
    }
}

module.exports = new UserHasBooksDao();