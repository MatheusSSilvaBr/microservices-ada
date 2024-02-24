const userDb = require('../adapters/repository/repository-user')

class UserService {
    static async userExistsByEmail(email) {
        return userDb.findOne(email)
    }
}

module.exports = UserService