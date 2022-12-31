const express = require('express');
const connectDB = require('./config/db')
const app = express();

connectDB();

app.use(express.json())

app.use("/api/users", require("./routes/users"));
app.use("/api/students", require("./routes/students"));
app.use("/api/class", require("./routes/class"));

// Set up the server on port 3000 if process.env.port is not available
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;