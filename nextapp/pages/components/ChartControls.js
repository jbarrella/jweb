import { React, useState, useEffect } from "react";
import { Grommet, RadioButtonGroup } from "grommet";
import "./Stats.css";

export default function ChartControls({ chartRange, setChartRange }) {
  return (
    <RadioButtonGroup
      className={styles.my-radio}
      name="chartRange"
      options={["All", "1Y", "6M", "3M", "1M"]}
      value={chartRange}
      onChange={(event) => setChartRange(event.target.value)}
      direction="row"
    />
  );
}
