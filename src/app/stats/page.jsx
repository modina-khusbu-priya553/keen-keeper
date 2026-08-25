"use client";
import {
  getCallFromLocalDB,
  getTextFromLocalDB,
  getVideoFromLocalDB,
} from "@/utils/localDB";
import React, { useEffect, useState } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const [calls, setCalls] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    setCalls(getCallFromLocalDB());
    setText(getTextFromLocalDB());
    setVideo(getVideoFromLocalDB());
  }, []);

  console.log(video);

  const data = [
    { name: "Call", value: calls.length, fill: "#244D3F" },
    { name: "Text", value: text.length, fill: "#7E35E1" },
    { name: "Video", value: video.length, fill: "#37A163" },
  ];
  return (
    <div className="bg-[#F8FAFC]">
      <div className="md:px-60 px-6 md:py-20 py-3 container mx-auto flex flex-col  gap-6 md:gap-10 justify-center">
        <h2>Friendship Analytics</h2>
        <div className="bg-white shadow px-8 py-8">
          <h2>By Interaction Type</h2>
          <PieChart
            style={{
              width: "100%",
              maxWidth: "300px",
              maxHeight: "20vh",
              margin: "auto",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="50%"
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend wrapperStyle={{ paddingTop: 20 }} />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
