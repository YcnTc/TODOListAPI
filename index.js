const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/api/tasks');

//Middlware
app.use('/', router);

//ROUTE HOME
app.get('/', (req, res) => {
    res.send('Welcome to my home page');
});

//PORT LISTEN
app.listen(port,() => {
    console.log(`App listening at port ${port}`);
});