import React from "react";
import { Chart } from "react-google-charts";

const GaugeChart = ({ value, title }) => {
  return (
    <>
      <Chart
        width={400}
        height={300}
        id="#grapsh"
        style={{ display: "flex", justifyContent: "center" }}
        chartType="Gauge"
        data={[
          ["Label", "Value"],
          ['', value],
        ]}
        options={{
          animation: {
            easing: "out",
            duration: 1500,
          },
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
