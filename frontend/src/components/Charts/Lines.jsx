import React, { useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";
import { useElementSize } from "./useElementSize";

const Lines = ({ data, height = 500, title }) => {
  const containerRef = useRef();
  const [width] = useElementSize(containerRef);
  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-white p-4 pl-0 mx-4 rounded-md shadow-md mb-8"
    >
      <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5,
          right: 40,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Lines;
