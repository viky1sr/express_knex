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

    async findById(Id) {
        const [data] = await db('books').where({id: Id}).select('*')

        return data;
    }

    async getAll() {
        const data = await db('books').where('id','<>',0).select('*').then( rows => {
            return rows;
        })
        return data;
    }
}

module.exports = new BookDao();