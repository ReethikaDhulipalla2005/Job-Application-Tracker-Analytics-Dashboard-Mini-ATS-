import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
  candidateName: { type: String, required: true },
  role: { type: String, required: true },
  yearsExperience: { type: Number, required: true },
  resumeLink: { type: String, required: true }, 
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offer", "Rejected"],
    default: "Applied",
  },
}, { timestamps: true });

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);
export default JobApplication;
