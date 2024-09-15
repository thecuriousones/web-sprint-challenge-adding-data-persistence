const db = require('../../data/dbConfig.js')

function getResources (){
    return db('resources')
}

async function addResources (resource) {
    return db('resources').insert(resource)
}

module.exports = { getResources, addResources };
