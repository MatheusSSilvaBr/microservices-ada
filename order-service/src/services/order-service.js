const RepositoryUser = require('../adapters/repository/repository-user')
const RepositoryOrder = require('../adapters/repository/repository-order')


class OrderService {
    static async create(order) {
        //Create order at database
        const orderCreated = RepositoryOrder.addOrder(order)
        return orderCreated
    }

    static async getUserEmail(userId) {
        const user = await RepositoryUser.findById(userId)
        return user.email
    }
}

module.exports = OrderService