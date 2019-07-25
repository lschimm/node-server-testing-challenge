exports.up = function(knex) {
  return knex.schema.createTable("pokemon", tbl => {
    tbl.increments();

    tbl.string("name", 255).notNullable();
  });
};

exports.down = function(knex) {
  //undo the opperation above
  return knex.schema.dropTableIfExists("pokemon");
};
