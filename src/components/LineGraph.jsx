import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";

export default function LineGraph({ hourly, name }) {
  return (
    <Fragment>
      <Line
        data={{
          labels: hourly.map((hour) => new Date(hour.dt).toLocaleTimeString()),
          datasets: [
            {
              label: `Hourly Temperature in ${name}`,
              data: hourly.map((hour) => hour.temp),
            },
          ],
        }}
      />
    </Fragment>
  );
}
