const mongoConnection = require("../database/mongo-connection");
const session = require("./schema/Session");

class RepositorySession {
  constructor() {
    this.db = mongoConnection;
  }
  async create(data) {
    this.db.connect();
    const newSession = new Session(data);
    await newSession.save();
    this.db.close();
  }

  async findOne(email) {
    await this.db.connect();
    const sessionSearch = await session.findOne({email: `${email}`});
    await this.db.close();
    return sessionSearch;
  }
}

module.exports = new RepositorySession();