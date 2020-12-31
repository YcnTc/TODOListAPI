const express = require('express');
const app = express();
const router = require('./routes/api/tasks');
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to db
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then((result) => app.listen(process.env.PORT))
    .catch((err) => console.log(err));

// parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Middlware
app.use('/tasks', router);

//ROUTE HOME
app.get('/', (req, res) => {
    res.send('Welcome to my home page');
});