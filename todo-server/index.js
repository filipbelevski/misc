require('dotenv').config();
require('./db/db');
const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo');

const express = require('express');
const { PORT } = process.env;
const app = express();

app.use(express.json());
// app.use(userRoutes);
app.use(todoRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});