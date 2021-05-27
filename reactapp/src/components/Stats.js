import "../App.css";
import React from "react";
import { Box, Grommet, Heading } from "grommet";
import NavBar from "./NavBar";

export default function Stats() {
  return (
    <Grommet full>
      <NavBar />
      <Heading fill color="dark-1" textAlign="center" size="80px">
        Art NFT Stats
      </Heading>
      <Box fill direction="row" flex align="center" justify="center" border={{color: "brand", size: "5px"}}>
        <Box height="100%" width="40vw" border={{color: "green", size: "3px"}}>

        </Box>
        <Box height="100%" width="60vw" border={{color: "blue", size: "3px"}}>

        </Box>
      </Box>
    </Grommet>
  );
}
