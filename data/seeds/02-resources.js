exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    { resource_name: "test resource name", resource_description: 'test resource description'},
    { resource_name: "test resource name 2", resource_description: 'test resource description 2'}
  ]);
};
