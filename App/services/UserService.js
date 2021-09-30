const UserDao = require('../dao/UserDao');

class UserService {
    createUser(userDto){
        const {firstName, lastName, email, password} = userDto;
        return UserDao.createUser(firstName, lastName, email, password);
    }

    updateUser(userDto){
        const {firstName, lastName, email, password,Id} = userDto;
        return UserDao.updateUser(firstName, lastName, email, password,Id);
    }
}

module.exports = new UserService();