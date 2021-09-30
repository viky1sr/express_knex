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
}

module.exports = new BookService();