const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./Tasks');

//ROUTE HOME
app.get('', (req, res) => {
    res.send('Welcome to my home page');
});

//GET ALL TASKS
app.get('/tasks', (req, res) => {
    res.send(tasks);
});
//GET TASK by id 
app.get('/tasks/:id', (req, res) => {
    const found = tasks.find(task => task.id === parseInt(req.params.id));
    res.send(found);
});


//PORT LISTEN
app.listen(port,() => {
    console.log(`App listening at port ${port}`);
});