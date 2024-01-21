require("dotenv").config();
const path = require("path");
require("./infra/database");

require("express-async-errors");

const express = require("express");
const cors = require("cors");

const { routes } = require("./routes");
const errorMidlleware = require("./infra/middlewares/error.midlleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/files", express.static(path.join(__dirname, "..", "tmp", "uploads")));

app.use(routes);
app.use(errorMidlleware);

app.set("port", process.env.PORT || 3333);

app.listen(app.get("port"), () => {
  console.log(`Server started on ${app.get("port")}`);
});
