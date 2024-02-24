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

  async addUser(user) {
    await this.db.connect();
    const userCreated = await User.create(user);
    console.log('Inserido no DB')
    await this.db.close();
    return { id: userCreated._id, email: userCreated.email}
  }
}

module.exports = new RepositoryUser();