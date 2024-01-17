const createUserUseCase = require("../usecases/create-user.usecase");
const getUserByIdUseCase = require("../usecases/get-user-by-id.usecase");
const updateUserUseCase = require("../usecases/update-user.usecase");
const deleteUserByIdUseCase = require("../usecases/delete-user-by-id.usecase");

module.exports = {
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

  async me(request, response) {
    const userId = request.user.id;

    const user = await getUserByIdUseCase.execute(userId);

    return response.json(user);
  },

  async update(request, response) {
    const userId = request.user.id;

    const { name, email, college } = request.body;

    const event = await updateUserUseCase.execute({
      userId,
      name,
      email,
      college,
    });

    return response.json(event);
  },

  async delete(request, response) {
    const userId = request.user.id;

    await deleteUserByIdUseCase.execute(userId);

    return response.status(205).json();
  },
};
