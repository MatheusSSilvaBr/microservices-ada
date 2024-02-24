const mongoConnection = require("../database/mongo-connection");
const Order = require("./schema/Order");

class RepositoryOrder {
  constructor() {
    this.db = mongoConnection;
  }

  async addOrder(order) {
    await this.db.connect();
    const orderCreated = await Order.create(order);
    console.log('Inserido no DB')
    await this.db.close();
    return { id: orderCreated._id, description: orderCreated.description}
  }
}

module.exports = new RepositoryOrder();