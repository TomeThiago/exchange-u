const { Router } = require("express");
const countriesController = require("../controllers/countries.controller");
const multer = require("multer");
const multerConfig = require("../../../config/multer.config");
const isAdminMiddleware = require("../../../infra/middlewares/isAdmin.middleware");

const countriesRouter = Router();

countriesRouter.get("/", countriesController.findCountries);
countriesRouter.post(
  "/create",
  isAdminMiddleware,
  multer(multerConfig).single("photoUrl"),
  countriesController.create
);
countriesRouter.delete("/:countryId", countriesController.deleteCountry);

module.exports = { countriesRouter };
