const listExchangeUsecase = require("../list-exchange.usecase");

module.exports = {
  async list(request, response) {
    const { coins } = request.query;

    const exchanges = await listExchangeUsecase.execute({
      coins,
    });

    return response.json(exchanges);
  },
};
