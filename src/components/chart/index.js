import React from "react";
import { Chart } from "react-google-charts";

const GaugeChart = ({ value, title }) => {
  return (
    <>
      <Chart
        width={400}
        height={300}
        id="#grapsh"
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        data={[
          ["Label", "Value"],
          [title, value],
        ]}
        options={{
          greenFrom: -20,
          greenTo: 0,
          redFrom: 10,
          redTo: 40,
          yellowFrom: 0,
          yellowTo: 10,
          minorTicks: 10,
          min: -20,
          max: 40,
          majorTicks: [
            "-20",
            "-15",
            "-10",
            "-5",
            "0",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30",
            "35",
            "40",
          ],
        }}
      />
    </>
  );
};

export default GaugeChart;
