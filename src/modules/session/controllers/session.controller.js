const createUserUseCase = require("../../../modules/users/usecases/create-user.usecase");
const authenticationUseCase = require("../usecases/authentication.usecase");

module.exports = {
  async authentication(request, response) {
    const { login, password } = request.body;

    const token = await authenticationUseCase.execute({
      login,
      password,
    });

    return response.json(token);
  },

  async create(request, response) {
    const { name, email, password, photoUrl, college } = request.body;

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
      photoUrl,
      college,
    });

    return response.json(user);
  },
};
