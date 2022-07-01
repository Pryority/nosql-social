const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const mongoString = process.env.DATABASE_URL
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected 🌍');
})

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${PORT}`)
})