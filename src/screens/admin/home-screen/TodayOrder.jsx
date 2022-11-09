import React from "react";
import ReactApexChart from "react-apexcharts";
import Card from "../../../components/Card";

function TodayOrder() {
  const state = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Sales",
        align: "left",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "SFProText",
          color: "#263238",
        },
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <Card>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width={380}
      />
    </Card>
  );
}

export default TodayOrder;
