const userDb = require('../adapters/repository/repository-session')

class UserService {
    static async userExistsByEmail(email) {
        return userDb.findOne(email)
    }
    
    static checkPassword(password, shouldMatchPassword) {
        return password === shouldMatchPassword
    }
}


module.exports = UserService