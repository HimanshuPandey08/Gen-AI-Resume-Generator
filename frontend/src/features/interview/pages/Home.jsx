import React, { useRef, useState } from "react";
import "../style/home.scss";
import { useInterview } from "../hooks/useInterview";
import { useNavigate } from 'react-router'


const Home = () => {
  
  const navigate = useNavigate()
  const { loading ,generateReport, reports } = useInterview()
  
  const [jobDescription, setJobDescription] = useState("")
  const [selfDescription, setSelfDescription] = useState("")
  const resumeInputRef = useRef()

  const handleGenerateReport = async () => {
    const resumeFile = resumeInputRef.current.files[0]
    const data = await generateReport({jobDescription, selfDescription , resumeFile})

    navigate(`/interview/${data._id}`)
  }

  if(loading){
    return (
      <main>
        <h1> Loading ......</h1>
      </main>
    )
  }

  return (
    <main className="home-page">

      <div className="page-header">
        <h1>
          AI <span className="highlight">Interview</span> Generator
        </h1>

        <p>
          Upload your resume, add your self description and job description to
          generate an AI-powered interview report.
        </p>
      </div>

      <div className="interview-card">

        <div className="interview-card__body">

          <div className="panel panel--left">

            <div className="panel__header">
              <h2>Job Description</h2>
              <span className="badge badge--required">Required</span>
            </div>

            <textarea
            onChange={(e)=>{setJobDescription(e.target.value)}}
              className="panel__textarea"
              id="jobDescription"
              name="jobDescription"
              placeholder="Paste the complete job description..."
            />

          </div>

          <div className="panel-divider"></div>

          <div className="panel panel--right">

            <div className="upload-section">

              <div className="section-label">
                Resume
                <span className="badge badge--best">
                  Best Result
                </span>
              </div>

              <label htmlFor="resume" className="dropzone">
                <div className="dropzone__icon">
                  📄
                </div>

                <p className="dropzone__title">
                  Click to Upload Resume
                </p>

                <p className="dropzone__subtitle">
                  PDF only
                </p>
              </label>

              <input
              ref={resumeInputRef}
                hidden
                type="file"
                id="resume"
                name="resume"
                accept=".pdf"
              />

            </div>

            <div className="or-divider">
              <span>AND</span>
            </div>

            <div className="self-description">

              <label
                htmlFor="selfDescription"
                className="section-label"
              >
                Self Description
              </label>

              <textarea
                onChange={(e)=>{setSelfDescription(e.target.value)}}
                id="selfDescription"
                name="selfDescription"
                className="panel__textarea panel__textarea--short"
                placeholder="Tell us about yourself..."
              />

            </div>

            <div className="info-box">

              <div className="info-box__icon">
                ℹ️
              </div>

              <p>
                <strong>Tip:</strong> Uploading a resume along with a self
                description generates a much more personalized interview report.
              </p>

            </div>

          </div>

        </div>

        <div className="interview-card__footer">

          <span className="footer-info">
            AI powered interview preparation
          </span>

          <button 
          onClick={handleGenerateReport}
          className="generate-btn">
            Generate Interview
          </button>

        </div>

      </div>

      {/* Recent Reports List */}

      {reports.length > 0 && (
        <section className="recent-reports">
          <h2>My Recent Interview Plans</h2>
          <ul className="reports-list">
            {reports.map((report) => (
              <li
                key={report._id}
                className="report-item"
                onClick={() => navigate(`/interview/${report._id}`)}
              >
                <h3>{report.title || "Untitled Position"}</h3>

                <p className="report-meta">
                  Generated on{" "}
                  {new Date(report.createdAt).toLocaleDateString()}
                </p>

                <span className="match-score">
                  Match Score: {report.matchScore ?? 0}%
                </span>
              </li>
            ))}
          </ul>

        </section>
      )}

      <footer className="page-footer">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </footer>

    </main>
  );
};

export default Home;