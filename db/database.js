const knexfile = require("./knexfile.js");
const { Model } = require("objection");
const knex = require("knex");

const setupdb = function () {
  const db = knex(knexfile.development);
  Model.knex(db);
};
module.exports = setupdb;
