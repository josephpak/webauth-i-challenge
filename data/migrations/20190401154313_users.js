exports.up = function(knex, Promise) {
  return knex.schema.table('users', users => {
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
