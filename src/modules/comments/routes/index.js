const { Router } = require("express");

const commentsController = require("../controllers/comments.controller");

const commentRouter = Router();

commentRouter.get("/", commentsController.list);
commentRouter.post("/create", commentsController.create);

commentRouter.post(
  "/like/:commentId/create",
  commentsController.createLikeComment
);
commentRouter.delete("/like/:commentId", commentsController.dislikeComment);

commentRouter.post(
  "/report/:commentId/create",
  commentsController.createReportComment
);

commentRouter.get("/reports", commentsController.listReportsComents);

module.exports = { commentRouter };
