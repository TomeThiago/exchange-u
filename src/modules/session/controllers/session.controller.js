const createUserUseCase = require("../../../modules/users/usecases/create-user.usecase");
const forgotPasswordUsecase = require("../../users/usecases/forgot-password.usecase");
const resetPasswordUsecase = require("../../users/usecases/reset-password.usecase");
const validRecoveryCodeUsecase = require("../../users/usecases/valid-recovery-code.usecase");
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
    const { name, email, password, college } = request.body;
    const photoUrl = request.file;

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
      photoUrl,
      college,
    });

    return response.json(user);
  },

  async forgotPassword(request, response) {
    const { email } = request.body;

    await forgotPasswordUsecase.execute({
      email,
    });

    return response.status(204).json();
  },

  async validRecoveryCode(request, response) {
    const { email, code } = request.body;

    await validRecoveryCodeUsecase.execute({
      email,
      code,
    });

    return response.status(204).json();
  },

  async resetPassword(request, response) {
    const { code, email, newPassword } = request.body;

    await resetPasswordUsecase.execute({
      email,
      code,
      newPassword,
    });

    return response.status(204).json();
  },
};
