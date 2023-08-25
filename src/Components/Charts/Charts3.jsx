import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Charts3 = () => {
  const data = [
    {
      name: "A",
      uv: 31.47,
      pv: 2400,
      fill: "#8884d8",
    },
    {
      name: "B",
      uv: 26.69,
      pv: 4567,
      fill: "#83a6ed",
    },
    {
      name: "C",
      uv: 15.69,
      pv: 1398,
      fill: "#8dd1e1",
    },
    {
      name: "D",
      uv: 8.22,
      pv: 9800,
      fill: "#82ca9d",
    },
    {
      name: "E",
      uv: 8.63,
      pv: 3908,
      fill: "#a4de6c",
    },
    {
      name: "F",
      uv: 2.63,
      pv: 4800,
      fill: "#d0ed57",
    },
    {
      name: "G",
      uv: 6.67,
      pv: 4800,
      fill: "#ffc658",
    },
  ];

  const style = {
    top: "30%",
    right: -10,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };
  return (
    <div className="card">
      <div style={{ width: "100%", height: "250px" }}>
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
            data={data}
          >
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#fff" }}
              background
              clockWise
              dataKey="uv"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts3;
