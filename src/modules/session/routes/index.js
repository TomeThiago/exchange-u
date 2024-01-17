const { Router } = require("express");
const sessionController = require("../controllers/session.controller");

const sessionRouter = Router();

sessionRouter.post("/login", sessionController.authentication);
sessionRouter.post("/create", sessionController.create);

module.exports = { sessionRouter };
