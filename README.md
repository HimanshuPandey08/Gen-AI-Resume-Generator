# Gen AI Resume Analyzer

> **Live Demo:** https://ixionstore.in

An AI-powered Resume Analyzer and Interview Preparation platform that analyzes a candidate's resume against a job description and generates a personalized interview preparation report using Google's Gemini AI.

The application helps job seekers identify skill gaps, evaluate resume-job compatibility, prepare for technical and behavioral interviews, and receive a structured preparation roadmap.

---

## Features

- AI-powered resume analysis
- Resume upload (PDF)
- Job description analysis
- Self-description support
- Resume-to-job match score
- Technical interview questions
- Behavioral interview questions
- Skill gap analysis
- Personalized preparation roadmap
- User authentication with JWT
- Secure HTTP-only cookies
- Protected dashboard
- Recent interview reports
- Responsive UI
- Custom domain deployment

---

## Tech Stack

### Frontend

- React.js
- React Router
- Axios
- SCSS
- Vite

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer
- PDF-Parse

### AI

- Google Gemini API

### Deployment

- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas

---

## Project Workflow

1. Register or login
2. Upload your resume (PDF)
3. Paste a job description
4. Add a self-description (optional)
5. Generate an AI-powered interview report
6. View previously generated reports

---

## AI Generated Report Includes

- Resume Match Score
- Technical Interview Questions
- Behavioral Interview Questions
- Skill Gap Analysis
- Personalized Preparation Plan

---

## Authentication

- JWT Authentication
- HTTP-only Cookies
- Protected Routes
- Persistent Login Sessions


---

## Environment Variables 

### Backend

```env or you can check out env.example as well
PORT=
MONGODB_URI=
JWT_SECRET=
CLIENT_URL=
GEMINI_API_KEY=
```

### Frontend

```env
VITE_API_URL=
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/your-repository.git
```

### Install Dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd backend
npm install
```

### Start Development Server

Backend

```bash
npm run dev
```

Frontend

```bash
npm run dev
```

---

## Future Improvements

- Resume Version History
- AI Resume Suggestions
- Cover Letter Generator
- Company-specific Interview Preparation
- Mock Interview Chat
- PDF Interview Report Export
- Interview Progress Tracking
- Admin Dashboard

---

## Screenshots

_Add project screenshots here._

---

## Live Website

https://ixionstore.in

---

## License

This project is for educational and portfolio purposes.

---

## Author

**Himanshu Pandey**

GitHub: https://github.com/HimanshuPandey08