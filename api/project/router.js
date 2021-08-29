const express = require('express')
const Project = require('./model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Project.getProjects()
      .then(project => {
        console.log(project)
        res.status(200).json(project);
      })
      .catch(err =>{
          console.log(err)
          res.status(500).json({message: 'Error getting projects'})
      })
  });

  router.post('/', (req, res) => { 
    Project.addProject(req.body)
      .then(project => {
        console.log(project)
        res.status(201).json(project);
      })
      .catch(err =>{
        console.log(err)
        res.status(500).json({message: 'Error adding project'})
    })
  });

module.exports = router;
