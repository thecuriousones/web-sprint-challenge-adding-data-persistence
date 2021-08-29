const db = require('../../data/dbConfig.js')

async function getProjects (){
    const results = await db('projects as p')
        .select('p.project_id', 'p.project_name', 'p.project_description', 'p.project_completed')

    const projects = []

    results.forEach(result => {
        projects.push({
        project_id: result.project_id,
        project_name: result.project_name,
        project_description: result.project_description,
        project_completed: Boolean(result.project_completed)
    })});

    return projects
}

async function addProject(project) {
    return db('projects').insert(project)
}

module.exports = { getProjects, addProject };