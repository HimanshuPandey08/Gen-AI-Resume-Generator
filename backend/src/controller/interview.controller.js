const pdfParser = require("pdf-parse")
const generateInterviewReport = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReoport.model")


async function GenerateInterViewReportController(req,res) {
    


    const resumeContent = await (new pdfParser.PDFParse(Uint8Array.from(req.file.buffer))).getText()
    const {  selfDescription , jobDescription } = req.body;

    const interviewReportByAi =await generateInterviewReport({ 
        resume : resumeContent.text ,
        selfDescription , 
        jobDescription})
        
    console.log(interviewReportByAi)
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



module.exports = { GenerateInterViewReportController } 