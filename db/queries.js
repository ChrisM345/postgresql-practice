const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getSearchResults(searchTerm) {
  const { rows } = await pool.query(`SELECT * FROM usernames WHERE username LIKE '%${searchTerm}%'`);
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteUsers() {
  await pool.query("DROP TABLE usernames");
  const SQL = `
  CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 )
  );
  `;
  await pool.query(SQL);
}

module.exports = {
  getAllUsernames,
  getSearchResults,
  insertUsername,
  deleteUsers,
};
