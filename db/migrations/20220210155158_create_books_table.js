/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("books", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("author").notNullable();
    table.integer("student_id").nullable();
    table.foreign("student_id").references("id").inTable("students");
    table.timestamp("borrow_date").defaultTo(knex.fn.now());
    table.timestamp("return_date");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("books");
};
