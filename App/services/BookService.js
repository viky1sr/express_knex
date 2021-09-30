const BookDao = require('../dao/BookDao');

class BookService {
    createBook(bookDto){
        const {nameBook} = bookDto;
        return BookDao.createBook(nameBook);
    }

    updateBook(bookDto){
        const {nameBook,Id} = bookDto;
        return BookDao.updateBook(nameBook,Id);
    }

    findById(bookDto) {
        const {Id} = bookDto;
        return BookDao.findById(Id)
    }

    getAll() {
        return BookDao.getAll();
    }
}

module.exports = new BookService();