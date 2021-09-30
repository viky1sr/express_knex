const db = require('../../database/db');


class BookDao {
    async createBook(nameBook){
        const [id] = await db('books').insert({
           name_book: nameBook
        }).returning('id');

        return id;
    }

    async updateBook(nameBook,Id) {
        const [id] = await db('books').where({id: Id}).update({
            name_book: nameBook
        }).returning('id');

        return id;
    }
}

module.exports = new BookDao();