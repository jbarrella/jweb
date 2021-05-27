import "../App.css";
import React from "react";
import { Box, Grommet, Heading } from "grommet";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { StlyedNFTCard } from "./StyledComponents";

export default function Home() {
  return (
    <Grommet full>
      <NavBar />
      <Heading fill color="dark-1" textAlign="center" size="80px">
        Projects
      </Heading>
      <Box justify="center" align="center">
        <Link style={{ color: "inherit", textDecoration: "none" }} to="/stats">
          <StlyedNFTCard
            alignSelf="center"
            align="center"
            justify="center"
            width="25vw"
            height="12vw"
            pad="small"
            background={{
              image:
                "url(https://lh3.googleusercontent.com/78l4OIBoVU9tWN32TAHHKFHnQ-PQMQYmvSeMvtAt1t01VWWxWTFI4_12nw6o4yvoQGkLv9akAi5iBNQ6YvPXfEmg)",
              size: "cover",
            }}
            gap="small"
            elevation="small"
          >
            <Heading color="white" level="3">
              Art NFT Stats
            </Heading>
          </StlyedNFTCard>
        </Link>
      </Box>
    </Grommet>
  );
}
