exports.up = knex =>
  knex.schema.createTable("todolist", tbl => {
    tbl.increments();
    tbl.text("title", 128).notNullable();
    tbl.text("name", 128).notNullable();
    tbl.text("description", 128).notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists("todolist");