const { Router } = require("express");
const multer = require("multer");

const sessionController = require("../controllers/session.controller");
const multerConfig = require("../../../config/multer.config");

const sessionRouter = Router();

sessionRouter.post("/login", sessionController.authentication);
sessionRouter.post(
  "/create",
  multer(multerConfig).single("photoUrl"),
  sessionController.create
);
sessionRouter.post("/forgot-password", sessionController.forgotPassword);
sessionRouter.post("/valid-recovery-code", sessionController.validRecoveryCode);
sessionRouter.post("/reset-password", sessionController.resetPassword);

module.exports = { sessionRouter };
