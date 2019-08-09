exports.up = function(knex) {
  // don't forget the return statement
  return knex.schema.createTable("cars", tbl => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called vin which is both required and unique
    tbl
      .text("vin", 17)
      .unique()
      .notNullable();
    // creates a numeric fields called make and model which is required
    tbl.text("make", 64).notNullable();
    tbl.text("model", 64).notNullable();
    tbl.decimal("mileage", 10);
  });
};

exports.down = function(knex) {
  // drops the entire table
  return knex.schema.dropTableIfExists("cars");
};
