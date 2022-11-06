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
      className="py-4 w-full overflow-hidden rounded-md shadow-md bg-base-white dark:bg-secondary-dark"
    >
      <h2 className="mb-4 text-center text-2xl font-bold text-base-black dark:text-base-166">
        {title}
      </h2>
      <BarChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5,
          right: 50,
          left: 50,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={x} />

        <YAxis yAxisId="left" orientation="left" stroke="#595959" />
        <Bar yAxisId="left" dataKey={bar1} fill="#595959" />
        {bar2 && <YAxis yAxisId="right" orientation="right" stroke="#D71827" />}
        {bar2 && <Bar yAxisId="right" dataKey={bar2} fill="#D71827" />}
        <Tooltip />
        <Legend />
        <Brush dataKey={x} height={30} stroke="#038CD2" />
      </BarChart>
    </div>
  );
};

export default Bars;
