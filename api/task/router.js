const express = require('express');
const Task = require('./model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Task.getTasks()
      .then(task => {
        console.log(task)
        res.status(200).json(task);
      })
      .catch(err =>{
          console.log(err)
          res.status(500).json({message: 'Error getting tasks'})
      })
  });

  router.post('/', (req, res) => { 
    Task.addTask(req.body)
      .then(task => {
        console.log(task)
        res.status(201).json(task);
      })
      .catch(err =>{
        console.log(err)
        res.status(500).json({message: 'Error adding tasks'})
    })
  });

module.exports = router;

