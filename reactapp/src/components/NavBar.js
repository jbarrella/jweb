import React from "react";
import { Heading, Header, Grommet, Nav, Box, Grid, Menu } from "grommet";
import { Github, Linkedin, Wordpress } from "grommet-icons";
import { StyledAnchor, StyledHomeLink, StyledPageLink } from "./StyledComponents";
import "./navbar.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Grommet>
      <Header
        pad={{ left: "small", right: "small", vertical: "small" }}
        justify="center"
        gap="33vw"
      >
        <Grid
          columns={["medium"]}
          rows={["100px", "50px"]}
          areas={[
            { name: "homeTitle", start: [0, 0], end: [1, 0] },
            { name: "links", start: [0, 1], end: [1, 1] },
          ]}
        >
          <Heading level="1" margin="none" color="brand" gridArea="homeTitle" alignSelf="center">
            <StyledHomeLink className="title-mobile" to="/">
              JB
            </StyledHomeLink>
            <StyledHomeLink className="title-desktop" to="/">
              Jason Barrella
            </StyledHomeLink>
          </Heading>
          <Nav direction="row" gridArea="links" alignSelf="center">
            <StyledAnchor
              icon={<Github />}
              href="https://github.com/jbarrella"
            />
            <StyledAnchor
              icon={<Linkedin />}
              href="https://www.linkedin.com/in/jason-barrella-725910178/"
            />
            <StyledAnchor
              icon={<Wordpress />}
              href="https://theismatlarge.wordpress.com"
            />
          </Nav>
        </Grid>
        <Box direction="row" gap="medium">
          <Heading level="3">
            <StyledPageLink>
            About
            </StyledPageLink>
          </Heading>
          <Heading level="3">
            <StyledPageLink>
            Projects
            </StyledPageLink>
          </Heading>
        </Box>
      </Header>
    </Grommet>
  );
}

export default Home;
