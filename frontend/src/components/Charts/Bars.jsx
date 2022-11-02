import React, { useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
} from "recharts";
import { useElementSize } from "./useElementSize";

const Bars = ({ data, height = 500, title }) => {
  const containerRef = useRef();
  const [width] = useElementSize(containerRef);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-white p-4 pl-0 mx-4 rounded-md shadow-md mb-8"
    >
      <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
      <BarChart
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
        <XAxis dataKey="name" interval={0} angle={-10} dx={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
        <Bar dataKey="amt" fill="coral" />
      </BarChart>
    </div>
  );
};

export default Bars;
