import React, { useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
} from "recharts";
import { useElementSize } from "./useElementSize";

const Lines = ({ data, height = 500, title }) => {
  const containerRef = useRef();
  const [width] = useElementSize(containerRef);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-white rounded-md shadow-md"
    >
      <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
      <LineChart
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
        <XAxis dataKey="period" />
        <YAxis yAxisId="left" stroke="#038CD2" />
        <YAxis yAxisId="right" orientation="right" stroke="#D71827" />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="Stoim"
          stroke="#038CD2"
          activeDot={{ r: 8 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="Netto"
          stroke="#D71827"
        />
        <Brush dataKey="name" height={30} stroke="#038CD2" />;
      </LineChart>
    </div>
  );
};

export default Lines;
