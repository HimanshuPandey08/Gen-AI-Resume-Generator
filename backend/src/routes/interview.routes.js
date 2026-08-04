const express = require("express");
const authMiddleware = require("../middleware/auth.middleware")
const upload = require("../middleware/file.middleware")
const interviewController = require("../controller/interview.controller")
const interviewRouter = express.Router();


interviewRouter.post("/", authMiddleware.authUser , upload.single("resume") , interviewController.generateInterViewReportController)


interviewRouter.get("/report/:interviewId", authMiddleware.authUser , interviewController.getInterviewReportByIdController)


interviewRouter.get("/", authMiddleware.authUser  , interviewController.getAllInterviewReoprtsController)



module.exports = interviewRouter