const express = require('express');
const router = express.Router();
const tasks = require('../../Tasks');


//GET ALL TASKS
router.get('/tasks', (req, res) => {
    res.json(tasks);
});

//GET TASK by id 
router.get('/tasks/:id', (req, res) => {
    const found = tasks.find(task => task.id === parseInt(req.params.id));
    res.json(found);
});


module.exports = router;