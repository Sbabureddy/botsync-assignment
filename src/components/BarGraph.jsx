import React, { Fragment } from "react";
import { Bar } from "react-chartjs-2";

export default function BarGraph({ daily, name }) {
  return (
    <Fragment>
      <Bar
        data={{
          labels: daily.map((day) => new Date(day.dt).toLocaleDateString()),
          datasets: [
            {
              label: `Daily Temperature in ${name}`,
              data: daily.map((day) => day.temp.day),
            },
          ],
        }}
      />
    </Fragment>
  );
}
