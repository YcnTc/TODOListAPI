const express = require('express');
const router = express.Router();
const Task = require('../../models/task');

//GET ALL TASKS
router.get('/', (req, res) => {
    
    Task.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

//GET TASK by id 
router.get('/:id', (req, res) => {

    Task.findById(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

//ADD TASK
router.post('/', (req, res) =>{

    const task = new Task({
        title: req.body.title,
        description: req.body.description,
    });

    task.save()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
});

//DELETE TASK
router.delete('/:id', (req, res) =>{

    Task.findByIdAndDelete(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

//PATCH TASK
router.patch('/:id', (req, res) => {

    Task.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});


module.exports = router;