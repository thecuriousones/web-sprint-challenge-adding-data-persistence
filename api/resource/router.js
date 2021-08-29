const express = require('express');
const Resource = require('./model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Resource.getResources()
      .then(resource => {
        console.log(resource)
        res.status(200).json(resource);
      })
      .catch(err =>{
          console.log(err)
          res.status(500).json({message: 'Error getting resources'})
      })
  });

  router.post('/', (req, res) => { 
    Resource.addResources(req.body)
      .then(resource => {
        console.log(resource)
        res.status(201).json(resource);
      })
      .catch(err =>{
        console.log(err)
        res.status(500).json({message: 'Error adding resources'})
    })
  });

module.exports = router;
