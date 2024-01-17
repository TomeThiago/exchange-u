const { Router } = require("express");

const collegeController = require("../controllers/college.controller");

const collegeRouter = Router();

collegeRouter.post("/create", collegeController.create);

module.exports = { collegeRouter };
