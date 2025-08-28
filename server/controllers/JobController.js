import JobApplication from "../models/JobApplication.js";

export const addApplication = async (req, res) => {
  try {
    const { candidateName, role, yearsExperience, resumeLink } = req.body;

    if (!candidateName || !role || !yearsExperience || !resumeLink) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const newApplication = new JobApplication({
      candidateName,
      role,
      yearsExperience,
      resumeLink,
    });

    await newApplication.save();

    res.status(201).json({ success: true, message: "Application added successfully", application: newApplication });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
