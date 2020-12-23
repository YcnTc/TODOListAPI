const express = require('express');
const router = express.Router();
const tasks = require('../../Tasks');

//GET ALL TASKS
router.get('/', (req, res) => {
    res.json(tasks);
});

//GET TASK by id 
router.get('/:id', (req, res) => {
    const found = tasks.find(task => task.id === parseInt(req.params.id));
    res.json(found);
});

//ADD TASK
router.post('/', (req, res) =>{
    tasks.push(req.body);
    res.json(tasks);
});

//DELETE TASK
router.delete('/:id', (req, res) =>{
    tasks.forEach(element => {
        if (element.id === parseInt(req.params.id))
        {
            tasks.splice(element.indexOf, 1);
        }
    });
    res.json(tasks);
});


module.exports = router;