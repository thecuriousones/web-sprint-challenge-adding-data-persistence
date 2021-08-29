exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    { project_name: 'test project name', project_description: "test project description", project_completed: 0 },
    { project_name: 'test project name', project_description: "test project description", project_completed: 0 }
  ]);
};
