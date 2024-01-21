const bcrypt = require("bcrypt");

module.exports = {
  async hash(payload) {
    return bcrypt.hash(payload, 8);
  },

  async compare(payload, valueToCompare) {
    return bcrypt.compare(payload, valueToCompare);
  },
};
