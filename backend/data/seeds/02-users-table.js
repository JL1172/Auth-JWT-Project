/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    { user_username: 'admin', user_password : "$2a$16$3O1lrA0WsS8O//LiehlKZu29dMrlRlyyxjrk0/EGhN/r37nWttuLG", role_id : 1},
    { user_username: 'alaina', user_password : "$2a$16$0wb3.g5LXAV1bNjvtvUWZOh0Sc07cmORN8is1fKLprBlORy/BdAG2", role_id : 3}
  ]);
};
