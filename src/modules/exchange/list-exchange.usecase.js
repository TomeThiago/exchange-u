module.exports = {
  async execute(props) {
    let { coins } = props;

    if (!coins) {
      coins = "USD-BRL,JPY-BRL,EUR-BRL,GBP-BRL,ARS-BRL";
    }

    const response = await fetch(
      `https://economia.awesomeapi.com.br/last/${coins}`
    );

    const exchanges = await response.json();

    return exchanges;
  },
};
