import JobApplication from "../models/JobApplication.js";

export const getAllApplications = async (req, res) => {
  try {
    const apps = await JobApplication.find();
    res.status(200).json(apps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Applied", "Interview", "Offer", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const appToUpdate = await JobApplication.findById(id);
    if (!appToUpdate) {
      return res.status(404).json({ message: "Application not found" });
    }

    appToUpdate.status = status;
    await appToUpdate.save();

    res.status(200).json(appToUpdate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
