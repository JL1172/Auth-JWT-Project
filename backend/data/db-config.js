const {NODE_ENV} = require("../config");
const knex = require('knex');

const config = require("../knexfile");

const env = NODE_ENV; 

module.exports = knex(config[env]); 