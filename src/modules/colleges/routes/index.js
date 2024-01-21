const { Router } = require("express");
const multer = require("multer");

const collegeController = require("../controllers/college.controller");
const multerConfig = require("../../../config/multer.config");
const isAdminMiddleware = require("../../../infra/middlewares/isAdmin.middleware");

const collegeRouter = Router();

collegeRouter.post(
  "/create",
  isAdminMiddleware,
  multer(multerConfig).single("photoUrl"),
  collegeController.create
);

collegeRouter.get("/:countryId", collegeController.findCollegesByCountryId);

module.exports = { collegeRouter };
