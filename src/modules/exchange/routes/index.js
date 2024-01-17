const { Router } = require("express");
const exchangeController = require("../controllers/exchange.controller");

const exchangeRouter = Router();

exchangeRouter.get("/", exchangeController.list);

module.exports = { exchangeRouter };
