exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(tbl) {
        tbl.string('first_name', 128)

        tbl.string('last_name', 128)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(tbl) {
    tbl.dropColumn('first_name')

    tbl.dropColumn('last_name')
  })
};
