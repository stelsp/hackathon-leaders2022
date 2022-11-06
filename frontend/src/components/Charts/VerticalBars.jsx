import React, { useRef } from "react";

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useElementSize } from "./useElementSize";

const VerticalBars = ({ data, height = 500, title, bar }) => {
  const containerRef = useRef();
  const [width] = useElementSize(containerRef);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      {title !== "" && (
        <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
      )}
      <ComposedChart
        layout="vertical"
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="id" type="category" scale="auto" />
        <Tooltip />
        <Legend />
        <Bar dataKey={bar} barSize={20} fill="#413ea0" />
        {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        {/* <Line dataKey="uv" stroke="#ff7300" /> */}
      </ComposedChart>
    </div>
  );
};

export default VerticalBars;
