const mongoose = require("mongoose");
const config = require("config");

mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    await mongoose.connect(config.get("MONGO_URI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;