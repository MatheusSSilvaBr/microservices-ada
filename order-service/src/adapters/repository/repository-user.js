const mongoConnection = require("../database/mongo-connection");
const User = require("./schema/User");

class RepositoryUser {
  constructor() {
    this.db = mongoConnection;
  }

  async findById(id) {
    await this.db.connect();
    const userSearch = await User.findOne({_id: `${id}`});
    await this.db.close();
    return userSearch;
  }
}

module.exports = new RepositoryUser();