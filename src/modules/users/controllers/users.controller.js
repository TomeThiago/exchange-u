const createUserUseCase = require("../usecases/create-user.usecase");
const getUserByIdUseCase = require("../usecases/get-user-by-id.usecase");
const updateUserUseCase = require("../usecases/update-user.usecase");
const deleteUserByIdUseCase = require("../usecases/delete-user-by-id.usecase");
const updatePhotoUsecase = require("../usecases/update-photo.usecase");

module.exports = {
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

  async updatePhoto(request, response) {
    const userId = request.user.id;
    const photoUrl = request.file;

    await updatePhotoUsecase.execute({
      userId,
      photoUrl,
    });

    return response.status(204).json();
  },
};
