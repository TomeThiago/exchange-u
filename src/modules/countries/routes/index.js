const { Router } = require("express");
const countriesController = require("../controllers/countries.controller");

const countriesRouter = Router();

countriesRouter.get("/", countriesController.findCountries);
countriesRouter.post("/create", countriesController.create);

module.exports = { countriesRouter };
