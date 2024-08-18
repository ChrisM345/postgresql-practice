const db = require("../db/queries");

module.exports = {
  get: (req, res) => {
    res.render("userView", { title: "Add New User" });
  },
  post: async (req, res) => {
    const user = req.body;
    await db.insertUsername(user.name);
    res.redirect("/");
  },
  getDeleteUsers: (req, res) => {
    res.render("deleteUsersView", { title: "Delete Users" });
  },
  confirmDelete: async (req, res) => {
    await db.deleteUsers();
    res.redirect("/");
  },
};
