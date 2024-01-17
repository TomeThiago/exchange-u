const { Router } = require("express");
const usersController = require("../controllers/users.controller");

const usersRouter = Router();

usersRouter.get("/me", usersController.me);
usersRouter.put("/", usersController.update);
usersRouter.delete("/", usersController.delete);

module.exports = { usersRouter };
