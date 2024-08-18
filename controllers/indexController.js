const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  const data = usernames;
  console.log(data);
  return data;
}

module.exports = {
  get: async (req, res) => {
    const searchTerm = req.query.username;
    let usernames = [];
    if (searchTerm) {
      usernames = await db.getSearchResults(searchTerm);
    } else {
      usernames = await getUsernames();
    }
    res.render("indexView", { usernames: usernames, seachTerm: searchTerm || "test" });
  },
};
