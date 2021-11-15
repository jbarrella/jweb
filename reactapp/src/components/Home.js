import "../App.css";
import "./home.css";
import "../index.css";
import { React, useState, useRef } from "react";
import {
  Box,
  Grommet,
  Heading,
  Text,
  Image,
  Nav,
  Stack,
  Diagram,
  Button,
} from "grommet";
import { Github, Linkedin, Wordpress, Sun, Moon, Nodes } from "grommet-icons";
import {
  StyledAnchor,
  StyledHomeLink,
  StyledPageLink,
  ThemeSwitch,
} from "./StyledComponents";
import { Link, HashRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Hero from "./Hero";
import { StlyedNFTCard } from "./StyledComponents";
import { SiUpwork, SiGithub, SiLinkedin } from "react-icons/si";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const aboutSection = useRef(null);
  const projectSection = useRef(null);
  const textColor = () => (theme == "light" ? "black" : "white");
  const accentTextColor = () => (theme == "light" ? "brand" : "pink");
  const timelineNodes = [1, 2, 3, 4, 5, 6, 7];
  const linkNodes = (node) => {
    return {
      fromTarget: node.toString(),
      toTarget: (node + 1).toString(),
      thickness: "5px",
      color: textColor(),
      anchor: "vertical",
      type: "direct",
    };
  };
  return (
    <Grommet
      className="themeBody"
      background={theme == "light" ? "#eee4d4" : "#161616"}
      full
    >
      <NavBar
        projectSection={projectSection}
        aboutSection={aboutSection}
        theme={theme}
        setTheme={setTheme}
      />
      <Hero />
      <Box align="center" direction="column">
        {/* <Box
          pad="medium"
          className="bio"
          width="50vw"
          align="center"
          background={
            theme == "light" ? { color: "#f4eee4" } : { color: "#252525" }
          }
        >
          <Text size="large" color={textColor}>
            Hello! I am a software developer and data scientist
          </Text>
        </Box> */}
        <Box
          background={
            theme == "light" ? { color: "#f4eee4" } : { color: "#252525" }
          }
          direction="column"
          width={{min: "500px"}}
          pad="medium"
          className="bioBox"
        >
          <Box ref={aboutSection} id="about" width="50vw" direction="row">
            <Box direction="column" fill>
              <Text color={textColor} size="50px" weight="bold">
                Jason Barrella
              </Text>
              <Box height="10px" />
              <Text className="rolesText" color="red">
                Freelance developer / problem-solver
              </Text>
            </Box>
            <Box
              border={{ color: "#FFCA58", size: "6px" }}
              width="200px"
              className="imageBox"
            >
              <Image src="/images/pp-filter-1.png"></Image>
            </Box>
          </Box>
          <Text margin={{ top: "30px" }} bioText color={textColor}>
            Jason is a Masters graduate in Physics from the University of Cape
            Town in 2022. He has since n working as a freelance software
            developer. He has a passion for solving difficult problems related
            to STEM fields. When not working, he enjoys climbing, reading, and
            travelling.
          </Text>
          <Box height="40px" />
          <Nav alignSelf="end" className="socials" direction="row">
            <StyledAnchor
              icon={<SiGithub size="22px" />}
              href="https://github.com/jbarrella"
            />
            <StyledAnchor
              icon={<SiLinkedin size="22px" />}
              href="https://www.linkedin.com/in/jason-barrella-725910178/"
            />
            <StyledAnchor
              icon={<SiUpwork size="22px" />}
              href="https://www.upwork.com/freelancers/~0169fe33838c5e48c9"
            />
          </Nav>
        </Box>
        <Box
          background={
            theme == "light" ? { color: "#f4eee4" } : { color: "#252525" }
          }
          width="50vw"
          pad="medium"
          className="bioBox"
          direction="column"
        >
          <Text className="sectionHeading" size="23px" color={textColor}>
            History
          </Text>
          <Stack guidingChild={1}>
            <Diagram connections={timelineNodes.map(linkNodes)} />
            <Box>
              <Box direction="column">
                <Box direction="row">
                  <Box
                    border={{ size: "5px", color: textColor() }}
                    className="timelineNode1"
                    id="1"
                  />
                  <Text color={textColor} margin={{ left: "20px" }}>
                    <b>2016</b> - Began a{" "}
                    <span style={{ color: "#FD6FFF" }}>Degree</span> in Physics
                    & Astrophysics at the University of Cape Town.
                  </Text>
                </Box>
                <Box direction="row">
                  <Box
                    border={{ size: "5px", color: textColor() }}
                    className="timelineNode3"
                    id="2"
                  />
                  <Text color={textColor} margin={{ left: "20px" }}>
                    <b>2016</b> - Tool-assisted{" "}
                    <span style={{ color: "#FD6FFF" }}>trading</span> of digital
                    assets.
                  </Text>
                </Box>
                <Box direction="row">
                  <Box
                    border={{ size: "5px", color: textColor() }}
                    className="timelineNode2"
                    id="3"
                  />
                  <Text color={textColor} margin={{ left: "20px" }}>
                    <b>2018</b> - Wrote and deployed a high-frequency{" "}
                    <span style={{ color: "#FD6FFF" }}>
                      cryptocurrency arbitrage
                    </span>{" "}
                    trading bot.
                  </Text>
                </Box>
                <Box direction="row">
                  <Box
                    border={{ size: "5px", color: textColor() }}
                    className="timelineNode2"
                    id="4"
                  />
                  <Text color={textColor} margin={{ left: "20px" }}>
                    <b>2019</b> - Completed B.Sc. Honours degree in Physics
                    (Dean's merit list award).
                  </Text>
                </Box>
                <Box direction="row">
                  <Box
                    border={{ size: "5px", color: textColor() }}
                    className="timelineNode1"
                    id="5"
                  />
                  <Text color={textColor} margin={{ left: "20px" }}>
                    <b>2020</b> -{" "}
                    <span style={{ color: "#FD6FFF" }}> Tutoring</span> in
                    honours level computational physics.
                  </Text>
                </Box>
                <Box direction="row">
                  <Box
                    border={{ size: "5px", color: textColor() }}
                    className="timelineNode2"
                    id="6"
                  />
                  {/* <FaUniversity
                    className="uniNode"
                    fill={textColor()}
                    size="30px"
                    id="6"
                  /> */}
                  <Text color={textColor} margin={{ left: "20px" }}>
                    <b>2020</b> - Began a
                    <span style={{ color: "#FD6FFF" }}> Masters degree</span> in
                    Physics (research scholarship).
                  </Text>
                </Box>
                <Box direction="row">
                  <Box
                    border={{ size: "5px", color: textColor() }}
                    className="timelineNode1"
                    id="7"
                  />
                  <Text color={textColor} margin={{ left: "20px" }}>
                    <b>2021</b> - Worked as a
                    <span style={{ color: "#FD6FFF" }}> freelance</span>{" "}
                    software developer on Upwork.
                  </Text>
                </Box>
                <Box direction="row">
                  <Box
                    border={{ size: "5px", color: textColor() }}
                    className="timelineNode1"
                    id="8"
                  />
                  <Text color={textColor} margin={{ left: "20px" }}>
                    <b>2021</b> -{" "}
                    <span style={{ color: "#FD6FFF" }}>Tutoring</span> in 3rd
                    year electrodynamics and special relativity
                  </Text>
                </Box>
              </Box>
            </Box>
          </Stack>
          <Box
            margin={{ top: "20px" }}
            width="150px"
            align="center"
            alignSelf="center"
          >
            <Button
              primary={true}
              size="medium"
              href="/documents/Jason_Barrella_Curriculum_Vitae_1p.pdf"
              label="Full CV"
            ></Button>
          </Box>
        </Box>
        <Box
          id="projects"
          background={
            theme == "light" ? { color: "#f4eee4" } : { color: "#252525" }
          }
          width="50vw"
          pad="medium"
          className="bioBox"
          direction="column"
        >
          <Text className="sectionHeading" size="23px" color={textColor}>
            Technologies
          </Text>
          <Text>
            Python, JavaScript, C++, React, Docker, RESTful APIs, Linux, Git
          </Text>
        </Box>
      </Box>
      <Heading
        ref={projectSection}
        fill
        color={textColor}
        textAlign="center"
        size="80px"
      >
        Projects
      </Heading>
      <Box margin={{ bottom: "100px" }} justify="center" align="center">
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
            elevation="none"
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
