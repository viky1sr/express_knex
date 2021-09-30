const db = require('../../database/db');


class BookDao {
    async createBook(nameBook){
        const [data] = await db('books').insert({
           name_book: nameBook
        }).returning('*');

        return data;
    }

    async updateBook(nameBook,Id) {
        const [data] = await db('books').where({id: Id}).update({
            name_book: nameBook
        }).returning('*');

        return data;
    }
}

module.exports = new BookDao();