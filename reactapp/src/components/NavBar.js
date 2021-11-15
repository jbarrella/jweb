import { React, useRef } from "react";
import {
  Heading,
  Header,
  Grommet,
  Nav,
  Box,
  Grid,
  Button,
  Anchor,
} from "grommet";
import { Github, Linkedin, Wordpress, Sun, Moon } from "grommet-icons";
import {
  StyledAnchor,
  StyledHomeLink,
  StyledPageLink,
  ThemeSwitch,
} from "./StyledComponents";
import "./navbar.css";
import { Link } from "react-router-dom";

function Home({ projectSection, aboutSection, theme, setTheme }) {
  const accentTextColor = () => (theme == "light" ? "#7d4cdb" : "#FD6FFF");
  return (
    <Grommet>
      <div
        // style={{ background: theme == "light" ? "#eee4d4" : "#252525" }}
        className="headerDiv"
      >
        <Heading
          alignSelf="end"
          className="title"
          level="2"
          margin={{ bottom: "10px" }}
          color="#7f6df2"
        >
          <StyledHomeLink className="title-mobile" to="/">
            JB
          </StyledHomeLink>
          <StyledHomeLink className="title-desktop" to="/">
            Jason Barrella
          </StyledHomeLink>
        </Heading>
        <Box className="sectionLinks" direction="row" gap="medium">
          <Heading
            color="#7f6df2"
            alignSelf="end"
            level="3"
            margin={{ bottom: "10px" }}
          >
            <Button
              onClick={() => {
                aboutSection.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="sectionButton"
              focusIndicator={false}
            >
              About
            </Button>
          </Heading>
          <Heading
            color="#7f6df2"
            alignSelf="end"
            level="3"
            margin={{ bottom: "10px" }}
          >
            <Button
              onClick={() => {
                projectSection.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="sectionButton"
              focusIndicator={false}
            >
              Projects
            </Button>{" "}
          </Heading>
        </Box>
        <ThemeSwitch
          border={{ color: "accent-1", size: "3px" }}
          alignSelf="end"
          width="53px"
        >
          <Button
            focusIndicator={false}
            icon={
              theme == "light" ? (
                <Moon color="black" size="25px" />
              ) : (
                <Sun color="white" className="lightIcon" size="25px" />
              )
            }
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          ></Button>
        </ThemeSwitch>
      </div>
    </Grommet>
  );
}

export default Home;
