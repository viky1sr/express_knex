const UserBookDao = require('../dao/UserHasBooksDao');

class UserHasBooksService {
    createUserHasBooks(userHasBooksDto){
        const {bookId, userId} = userHasBooksDto
        return UserBookDao.createUserBook(bookId, userId);
    }

    updateUserHasBooks(userHasBooksDto) {
        const {bookId, userId, Id} = userHasBooksDto;
        return UserBookDao.updateUserBook(bookId, userId,Id);
    }

    findById(userHasBooksDto) {
        const {Id, userId} = userHasBooksDto;
        return UserBookDao.findById(Id, userId);
    }

    getAll(userHasBooksDto) {
        const {userId} = userHasBooksDto;
        return UserBookDao.getAllUserHasBooks(userId);
    }

}

module.exports = new UserHasBooksService();