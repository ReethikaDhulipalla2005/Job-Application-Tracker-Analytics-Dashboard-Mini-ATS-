import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const stages = ["Applied", "Interview", "Offer", "Rejected"];

const KanbanBoard = () => {
  const [applications, setApplications] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get("/api/jobs");
      if (Array.isArray(res.data)) {
        setApplications(res.data);
      } else {
        setApplications([]);
        console.error("Expected array but got:", res.data);
      }
    } catch (err) {
      console.error("Fetching jobs failed:", err);
      setApplications([]);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`/api/jobs/${id}`, { status: newStatus });
      fetchApplications();
    } catch (err) {
      console.error(err);
    }
  };

  const dragThreshold = 100;

  return (
    <div
      ref={containerRef}
      className="flex space-x-4 p-4 overflow-x-auto select-none"
      style={{ userSelect: "none" }}
    >
      {stages.map((stage) => (
        <div
          key={stage}
          className="w-64 bg-gray-100 rounded p-3 flex-shrink-0 min-h-[300px]"
        >
          <h2 className="font-bold text-lg mb-3">{stage}</h2>
          <AnimatePresence>
            {applications
              .filter((app) => app.status === stage)
              .map((app) => (
                <motion.div
                  key={`${app._id}-${app.status}`}
                  layout
                  drag="x"
                  dragConstraints={containerRef}
                  dragElastic={0.2}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white rounded p-3 mb-2 shadow cursor-pointer"
                  onDragEnd={(event, info) => {
                    const offsetX = info.offset.x;
                    const currentIndex = stages.indexOf(stage);
                    if (offsetX > dragThreshold && currentIndex < stages.length - 1) {
                      updateStatus(app._id, stages[currentIndex + 1]);
                    } else if (offsetX < -dragThreshold && currentIndex > 0) {
                      updateStatus(app._id, stages[currentIndex - 1]);
                    }
                  }}
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                  dragMomentum={false}
                >
                  <p>
                    <strong>{app.candidateName}</strong>
                  </p>
                  <p>{app.role}</p>
                  <p>{app.yearsExperience} yrs</p>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
