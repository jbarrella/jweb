import React from "react";
import { Heading, Header, Grommet, Nav, Anchor } from "grommet";
import { Github, Linkedin, Wordpress } from "grommet-icons";
import { StyledAnchor, StyledHomeLink } from "./StyledComponents";

function Home() {
  return (
    <Grommet>
      <Header
        pad={{ left: "medium", right: "small", vertical: "small" }}
        justify="center"
        gap="500px"
      >
        <Heading level="1" margin="none" color="brand">
          <StyledHomeLink to="/">Jason.com</StyledHomeLink>
        </Heading>
        <Nav pad="none" direction="row" pad="medium">
          <StyledAnchor icon={<Github />} href="https://github.com/jbarrella" />
          <StyledAnchor
            icon={<Linkedin />}
            href="https://www.linkedin.com/in/jason-barrella-725910178/"
          />
          <StyledAnchor
            icon={<Wordpress />}
            href="https://theismatlarge.wordpress.com"
          />
        </Nav>
      </Header>
    </Grommet>
  );
}

export default Home;
