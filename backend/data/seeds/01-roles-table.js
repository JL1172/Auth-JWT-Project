/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('roles').truncate()
  await knex('roles').insert([
    { role_name: 'admin'},
    { role_name: 'student'},
    { role_name: 'instructor'}
  ]);
};
