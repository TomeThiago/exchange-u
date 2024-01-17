const { Router } = require("express");

const authMiddleware = require("./infra/middlewares/auth.middleware");

const { sessionRouter } = require("./modules/session/routes");
const { usersRouter } = require("./modules/users/routes");

const errorMidlleware = require("./infra/middlewares/error.midlleware");
const { countriesRouter } = require("./modules/countries/routes");
const { exchangeRouter } = require("./modules/exchange/routes");
const { collegeRouter } = require("./modules/colleges/routes");

const routes = Router();

routes.use("/auth", errorMidlleware, sessionRouter);

routes.use(authMiddleware);

routes.use("/users", usersRouter);
routes.use("/countries", countriesRouter);
routes.use("/college", collegeRouter);
routes.use("/exchange", exchangeRouter);

module.exports = { routes };
