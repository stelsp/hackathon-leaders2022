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

const Bars = ({ data, height = 500, title, bar1, bar2, x }) => {
  const containerRef = useRef();
  const [width] = useElementSize(containerRef);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-white rounded-md shadow-md"
    >
      <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
      <BarChart
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
        <XAxis dataKey={x} />
        <YAxis yAxisId="left" orientation="left" stroke="#2A3958" />
        <YAxis yAxisId="right" orientation="right" stroke="#D71827" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey={bar1} fill="#2A3958" />
        {bar2 && <Bar yAxisId="right" dataKey={bar2} fill="#D71827" />}
        <Brush dataKey={x} height={30} stroke="#038CD2" />
      </BarChart>
    </div>
  );
};

export default Bars;
