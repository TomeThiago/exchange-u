const createCommentUsecase = require("../usecases/create-comment.usecase");
const dislikeCommentUsecase = require("../usecases/dislike-comment.usecase");
const likeCommentUsecase = require("../usecases/like-comment.usecase");
const listCommentsUsecase = require("../usecases/list-comments.usecase");
const listReportCommentsUsecase = require("../usecases/list-report-comments.usecase");
const removeReportCommentUsecase = require("../usecases/remove-report-comment.usecase");
const reportCommentUsecase = require("../usecases/report-comment.usecase");
const deleteCommentUsecase = require("../usecases/delete-comment.usecase");

module.exports = {
  async list(request, response) {
    const { subCategoryId, countryId } = request.query;

    const comments = await listCommentsUsecase.execute({
      subCategoryId,
      countryId,
    });

    return response.json(comments);
  },

  async create(request, response) {
    const { subCategoryId, countryId, message } = request.body;
    const userId = request.user.id;

    const comment = await createCommentUsecase.execute({
      subCategoryId,
      countryId,
      message,
      userId,
    });

    return response.json(comment);
  },

  async createLikeComment(request, response) {
    const { commentId } = request.params;

    const userId = request.user.id;

    await likeCommentUsecase.execute({
      userId,
      commentId,
    });

    return response.status(201).json();
  },

  async dislikeComment(request, response) {
    const { commentId } = request.params;
    const userId = request.user.id;

    await dislikeCommentUsecase.execute({
      commentId,
      userId,
    });

    return response.status(205).json();
  },

  async createReportComment(request, response) {
    const { commentId } = request.params;
    const userId = request.user.id;

    await reportCommentUsecase.execute({
      commentId,
      userId,
    });

    return response.status(205).json();
  },

  async deleteComment(request, response) {
    const { commentId } = request.params;

    await deleteCommentUsecase.execute({
      commentId,
    });

    return response.status(205).json();
  },

  async listReportsComents(request, response) {
    const { subCategoryId, countryId } = request.query;

    const reports = await listReportCommentsUsecase.execute({
      countryId,
      subCategoryId,
    });

    return response.json(reports);
  },

  async removeReportComment(request, response) {
    const { reportId } = request.params;

    await removeReportCommentUsecase.execute({
      reportId,
    });

    return response.status(205).json();
  },
};
