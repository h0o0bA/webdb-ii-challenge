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
    // creates a text fields called make and model, and a numeric field called mileage which is required
    tbl.text("make", 64).notNullable();
    tbl.text("model", 64).notNullable();
    tbl.decimal("mileage", 10).notNullable();
    // creates boolean fields called clean and salavage which is optional
    tbl.boolean("clean");
    tbl.boolean("salvage");
  });
};

exports.down = function(knex) {
  // drops the entire table
  return knex.schema.dropTableIfExists("cars");
};
