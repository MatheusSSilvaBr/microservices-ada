const RepositoryUser = require('../adapters/repository/repository-user')

class UserService {
    static async create(user) {
        //Create user at database
        const serchUser = await RepositoryUser.findOne(user.email)
        if(serchUser) {
            throw { status: 400, message: 'User already exists'}
        }
        const userCreated = RepositoryUser.addUser(user)
        return userCreated
    }
}

module.exports = UserService