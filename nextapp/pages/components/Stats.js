import { React, useState } from "react";
import { Box, Grommet, Heading, Grid } from "grommet";
import "./Stats.css";

import NavBar from "./NavBar";
import Chart from "./Chart";
import ChartControls from "./ChartControls";

export default function Stats() {
  const [chartRange, setChartRange] = useState("1Y");

  return (
    <Grommet full>
      <NavBar gridArea="navbar" />
      <Grid
        fill
        justifyContent="center"
        columns={["medium", "900px"]}
        rows={["150px", "large"]}
        gap="medium"
        areas={[
          { name: "title", start: [0, 0], end: [1, 0] },
          { name: "controls1", start: [0, 1], end: [0, 1] },
          { name: "chart1", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Heading
          fill
          gridArea="title"
          color="dark-1"
          textAlign="center"
          size="80px"
        >
          Art NFT Stats
        </Heading>
        <Box
          gridArea="controls1"
          // justify="center"
          alignSelf="center"
          align="center"
          height="20%"
          width="35vw"
          // background="light-3"
          elevation="medium"
          className={styles.box-class}
          border={{ color: "brand", size: "2px" }}
        >
          <Box width="100%" margin={{ left: "40px" }}>
            <Heading level="4" fill textAlign="start">
              Date Range:
            </Heading>
          </Box>
          <ChartControls
            chartRange={chartRange}
            setChartRange={setChartRange}
          />
        </Box>
        <Box
          fill
          gridArea="chart1"
          justify="center"
          align="center"
          height="100%"
          width="65vw"
        >
          <Heading level="3" color="dark-1">
            Daily SUPR Transactions
          </Heading>
          <Chart chartRange={chartRange} />
        </Box>
      </Grid>
    </Grommet>
  );
}
