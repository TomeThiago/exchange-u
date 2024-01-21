const { Router } = require("express");
const multer = require("multer");

const usersController = require("../controllers/users.controller");

const multerConfig = require("../../../config/multer.config");

const usersRouter = Router();

usersRouter.get("/me", usersController.me);
usersRouter.put("/", usersController.update);
usersRouter.delete("/", usersController.delete);
usersRouter.patch(
  "/photo-profile",
  multer(multerConfig).single("photoUrl"),
  usersController.updatePhoto
);

module.exports = { usersRouter };
