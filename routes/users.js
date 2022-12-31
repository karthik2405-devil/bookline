const express = require('express')
const User = require("../models/users")
const bcrypt = require('bcrypt')
const router = express.Router()

router.post('/users', async (req, res) => {
    try {
      const userID = req.body.userID;
      const password = req.body.password;
  
      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user object with the hashed password
      const user = new User({ userID, password: hashedPassword });
  
      // Save the user to the database
      await user.save();
      res.send({ message: 'User is added to the database successfully!'});
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: ' Error adding user to database' });
    }
});

module.exports = router