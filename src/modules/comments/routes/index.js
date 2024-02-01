const { Router } = require("express");

const commentsController = require("../controllers/comments.controller");

const commentRouter = Router();

commentRouter.get("/", commentsController.list);
commentRouter.post("/create", commentsController.create);
commentRouter.delete("/:commentId", commentsController.deleteComment);

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
commentRouter.delete(
  "/reports/:reportId",
  commentsController.removeReportComment
);

module.exports = { commentRouter };
