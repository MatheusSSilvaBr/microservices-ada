const mongoose = require('mongoose');

class MongoConnection {
  async connect() {
    try {
      await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);
      console.log('MongoDB connected...');
    } catch (err) {
      console.error(err.message, 'mongoerror');
      // Exit process with failure
      process.exit(1);
    }
  }

  async close() {
    await mongoose.connection.close();
  }
}

module.exports = new MongoConnection();