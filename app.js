const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const indexRoute = require("./routes/indexRoute");
const userRoute = require("./routes/userRoute");
app.use("/", indexRoute);
app.use("/", userRoute);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
