const { GoogleGenAI } = require("@google/genai");



const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
});




const interviewSchema = {
    type: "object",
    properties: {
        matchScore: {
        type: "number",
        description:
            "A score between 0 and 100 indicating how well the candidate's profile matches the job description."
        },

        technicalQuestions: {
        type: "array",
        description:
            "Technical questions that can be asked in the interview along with their intention and how to answer them.",
        items: {
            type: "object",
            properties: {
            question: {
                type: "string",
                description: "The technical question that can be asked in the interview."
            },
            intention: {
                type: "string",
                description: "The intention of the interviewer behind asking this question."
            },
            answer: {
                type: "string",
                description: "How to answer this question, what points to cover, and what approach to take."
            }
            },
            required: ["question", "intention", "answer"]
        }
        },

        behavioralQuestions: {
        type: "array",
        description:
            "Behavioral questions that can be asked in the interview along with their intention and how to answer them.",
        items: {
            type: "object",
            properties: {
            question: {
                type: "string",
                description: "The behavioral question that can be asked in the interview."
            },
            intention: {
                type: "string",
                description: "The intention of the interviewer behind asking this question."
            },
            answer: {
                type: "string",
                description: "How to answer this question, what points to cover, and what approach to take."
            }
            },
            required: ["question", "intention", "answer"]
        }
        },

        skillGaps: {
        type: "array",
        description:
            "List of skill gaps in the candidate's profile along with their severity.",
        items: {
            type: "object",
            properties: {
            skill: {
                type: "string",
                description: "The skill which the candidate is lacking."
            },
            severity: {
                type: "string",
                enum: ["low", "medium", "high"],
                description:
                "The severity of this skill gap and its impact on the candidate's chances."
            }
            },
            required: ["skill", "severity"]
        }
        },

        preparationPlan: {
        type: "array",
        description:
            "A day-wise preparation plan for the candidate to prepare effectively for the interview.",
        items: {
            type: "object",
            properties: {
            day: {
                type: "number",
                description:
                "The day number in the preparation plan, starting from 1."
            },
            focus: {
                type: "string",
                description:
                "The main focus of this day, e.g. React, System Design, Mock Interviews."
            },
            tasks: {
                type: "array",
                description:
                "List of tasks to complete on this day.",
                items: {
                type: "string"
                }
            }
            },
            required: ["day", "focus", "tasks"]
        }
        }
    },

    required: [
        "matchScore",
        "technicalQuestions",
        "behavioralQuestions",
        "skillGaps",
        "preparationPlan"
    ]
    };


async function generateInterviewReport({resume , selfDescription , jobDescription}) {

    const prompt = `
            You are a Senior Technical Recruiter.

            Analyze the following candidate for the given job.

            Resume:
            ${resume}

            Self Description:
            ${selfDescription}

            Job Description:
            ${jobDescription}

            Generate:
            - Match score (0-100)
            - 5 technical interview questions
            - 3 behavioral interview questions
            - 5 missing skills with severity
            - 7-day preparation plan

            Everything must be personalized to this candidate and the job description.

            Return ONLY JSON matching the provided schema.
            `;

    const response = await ai.models.generateContent({
        model:process.env.GEMINI_MODEL,
        contents:prompt ,
        config:{
            responseMimeType: "application/json",
            responseSchema: interviewSchema
        }
    })

    return JSON.parse(response.text)


}



module.exports =generateInterviewReport; 
