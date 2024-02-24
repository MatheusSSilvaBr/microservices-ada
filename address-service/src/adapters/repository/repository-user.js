const mongoConnection = require("../database/mongo-connection");
const User = require("./schema/User");

class RepositoryUser {
  constructor() {
    this.db = mongoConnection;
  }

  async findOne(email) {
    await this.db.connect();
    const userSearch = await User.findOne({email: `${email}`});
    await this.db.close();
    return userSearch;
  }

  async addAddress(user, address) {
    await this.db.connect();
    await User.findOneAndUpdate({email: `${user.email}`}, {...address});
    console.log('Inserido no DB')
    await this.db.close();
  }
}

module.exports = new RepositoryUser();