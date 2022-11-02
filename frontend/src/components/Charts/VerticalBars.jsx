import React, { useRef } from "react";

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
} from "recharts";
import { useElementSize } from "./useElementSize";

const VerticalBars = ({ data, height = 500, title }) => {
  const containerRef = useRef();
  const [width] = useElementSize(containerRef);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-white p-4 pl-0 mx-4 rounded-md shadow-md mb-8"
    >
      <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
      <ComposedChart
        layout="vertical"
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
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" />
        <Tooltip />
        <Legend />
        <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default VerticalBars;
