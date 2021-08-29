exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    { task_description: 'test task description', task_notes: 'test tasks notes', task_completed: 0, project_id: 1},
    { task_description: 'test task description 2', task_notes: 'test tasks notes 2', task_completed: 0, project_id: 2}
  ]);
};