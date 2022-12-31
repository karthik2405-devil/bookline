const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userID: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '30d' }
  });
  
  const User = mongoose.model('User', userSchema);

module.exports = User;