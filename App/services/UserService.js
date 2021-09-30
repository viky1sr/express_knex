const UserDao = require('../dao/UserDao');

class UserService {
    createUser(userDto){
        const {firstName, lastName, email, password} = userDto;
        return UserDao.createUser(firstName, lastName, email, password);
    }
}

module.exports = new UserService();