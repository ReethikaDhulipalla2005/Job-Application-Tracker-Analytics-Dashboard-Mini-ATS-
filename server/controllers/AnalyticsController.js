import JobApplication from "../models/JobApplication.js";

export const getSummary = async (req, res) => {
  try {
    const statusCounts = await JobApplication.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);
    const roleCounts = await JobApplication.aggregate([
      { $group: { _id: "$role", count: { $sum: 1 } } },
    ]);
    const avgExperience = await JobApplication.aggregate([
      { $group: { _id: null, avgYears: { $avg: "$yearsExperience" } } },
    ]);
    res.json({
      statusCounts,
      roleCounts,
      avgExperience: avgExperience[0]?.avgYears || 0,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
