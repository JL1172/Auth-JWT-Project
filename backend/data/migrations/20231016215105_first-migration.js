/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
  .createTable("roles",table => {
    table.increments("role_id");
    table.string("role_name").unique().notNullable();
  })
  .createTable("users",table=> {
    table.increments("user_id");
    table.string("user_username").unique().notNullable();
    table.string("user_password").notNullable();
    table.integer("role_id")
    .unsigned()
    .notNullable()
    .references("role_id")
    .inTable("roles")
    .onDelete("RESTRICT")
    .onUpdate("RESTRICT");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists("users")
  .dropTableIfExists("roles"); 
};
