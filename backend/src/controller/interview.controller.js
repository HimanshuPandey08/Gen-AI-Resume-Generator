const pdfParser = require("pdf-parse")
const generateInterviewReport = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReoport.model")


async function generateInterViewReportController(req,res) {
    


    const resumeContent = await (new pdfParser.PDFParse(Uint8Array.from(req.file.buffer))).getText()
    const {  selfDescription , jobDescription } = req.body;

    const interviewReportByAi =await generateInterviewReport({ 
        resume : resumeContent.text ,
        selfDescription , 
        jobDescription})
        
    const interviewReport = await interviewReportModel.create({
        user: req.user.id,
        resume:resumeContent.text,
        selfDescription,
        jobDescription,
        ...interviewReportByAi
    })

    res.status(201).json({
        message : "Report generated Successfull",
        interviewReport
    })
}


async function getInterviewReportByIdController(req,res) {
    
    const { interviewId } = req.params;

    const interviewReport = await interviewReportModel.findOne( {_id: interviewId , user: req.user.id } )

    if(!interviewReport){
        return res.status(404).json({
            message : "Reoprt Not Found "
        })
    }

    res.status(200).json({
        message: "Interview Report Fetched successfully",
        interviewReport
    })
}


async function getAllInterviewReoprtsController(req,res) {
    
    const interviewReports = await interviewReportModel.find({user: req.user.id }).sort({createdAt:-1 }).select("-resume -selfDescription -jobDescription  -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan -__v" )

    res.status(200).json({
        message : "All Reports fetched successfully",
        interviewReports
    })
}


module.exports = { generateInterViewReportController , getInterviewReportByIdController , getAllInterviewReoprtsController } 