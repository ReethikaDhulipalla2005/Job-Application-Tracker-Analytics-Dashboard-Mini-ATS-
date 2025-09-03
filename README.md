# Job-Appication-Tracker-Analytics-Dashboard-Mini-ATS

<h4>Project Overview and Architecture:-</h4>
 <p>The Job Application Tracker + Analytics Dashboard (Mini ATS) is a MERN stack project that helps recruiters manage and analyze job applications. It features a Kanban board (Applied → Interview → Offer → Rejected) with drag-and-drop, forms for adding applications. An analytics dashboard shows stage-wise counts, role breakdowns, and average experience using dynamic charts. The frontend (React + Tailwind) handles UI and API calls, the backend (Node.js + Express) provides CRUD and analytics endpoints, and the database (MongoDB) stores applications with aggregation for insights.</p>

 <h4>Database Schema:-</h4>
<p>candidateName: String, required – applicant’s name
role: String, required – applied job position
yearsExperience: Number, required – experience in years
resumeLink: String, required – link to resume
status: String, enum ["Applied", "Interview", "Offer", "Rejected"], default "Applied" – current application stage
Timestamps: Automatically adds createdAt and updatedAt</p>

<h4>Deployed in </h4>

<h4>Libraries Used:-</h4>
<p>Frontend:-
React – UI framework
TailwindCSS – Styling components
framer-motion – Drag-and-drop functionality for Kanban board
recharts – Charts for analytics dashboard

Backend:-
Node.js – Server runtime
Express.js – Web framework for API routes

Database:-
MongoDB Atlas – Store and fetch application data</p>



