# JOB-APPLICATION-TRACKER-ANALYTICS-DASHBOARD-MINI-ATS

<h4>PROJECT OVERVIEW AND ARCHITECTURE:-</h4>
 <p>The Job Application Tracker + Analytics Dashboard (Mini ATS) is a MERN stack project that helps recruiters manage and analyze job applications. It features a Kanban board (Applied → Interview → Offer → Rejected) with drag-and-drop, forms for adding applications. An analytics dashboard shows stage-wise counts, role breakdowns, and average experience using dynamic charts. The frontend (React + Tailwind) handles UI and API calls, the backend (Node.js + Express) provides CRUD and analytics endpoints, and the database (MongoDB) stores applications with aggregation for insights.</p>

 <h4>DATABASE SCHEMA:-</h4>
<p>candidateName: String, required – applicant’s name
role: String, required – applied job position
yearsExperience: Number, required – experience in years
resumeLink: String, required – link to resume
status: String, enum ["Applied", "Interview", "Offer", "Rejected"], default "Applied" – current application stage
Timestamps: Automatically adds createdAt and updatedAt</p>

<!--<h4>DEPLOYMENT:- </h4>
<p>CLIENT:- </p>
<p>SERVER:- https://job-application-tracker-analytics-d.vercel.app/</p>-->

<h4>LIBRARIES USED:-</h4>
<p>Frontend:-
<ul>
<li>React – UI framework</li>
<li>TailwindCSS – Styling components</li>
<li>framer-motion – Drag-and-drop functionality for Kanban board</li>
<li>recharts – Charts for analytics dashboard</li>
</ul>

Backend:-
<ul>
 <li>Node.js – Server runtime</li>
 <li>Express.js – Web framework for API routes</li>
</ul>

Database:-
<ul><li>MongoDB Atlas – Store and fetch application data</li></ul>
</p>

<h4>DEMO VIDEO LINK:-</h4>
<p>file:///C:/Users/Dell/OneDrive/Documents/Zoom/2025-08-28%2022.29.59%20reethika%20dhulipalla%20_%20AP22110011356's%20Personal%20Meeting%20Room/video2163658453.mp4</p>









