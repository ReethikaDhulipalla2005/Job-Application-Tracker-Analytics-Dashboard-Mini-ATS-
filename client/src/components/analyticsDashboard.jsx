import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AnalyticsDashboard = () => {
  const [data, setData] = useState({
    statusCounts: [],
    roleCounts: [],
    avgExperience: 0,
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await axios.get("/api/analytics/summary");
      setData({
        statusCounts: res.data.statusCounts.map((d) => ({ name: d._id, value: d.count })),
        roleCounts: res.data.roleCounts.map((d) => ({ name: d._id, value: d.count })),
        avgExperience: res.data.avgExperience,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-4xl">Hiring Pipeline Analytics</h2>
        <div className="bg-white rounded shadow p-4 w-48 text-center">
          <h3 className="font-semibold mb-2">Average Experience</h3>
          <p className="text-3xl font-bold">{data.avgExperience.toFixed(2)} years</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-8">
        <div className="flex-1 min-w-[300px] h-80 bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-2">Candidates by Stage</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.statusCounts}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="80%"
                fill="#8884d8"
                label
              >
                {data.statusCounts.map((entry, index) => (
                  <Cell key={`slice-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 min-w-[300px] h-80 bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-2">Candidates by Role</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.roleCounts} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" tick={false} />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
