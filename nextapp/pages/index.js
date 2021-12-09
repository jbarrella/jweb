import styles from "./home.module.css";
import Head from 'next/head'
// import Image from 'next/image'
import { React, useState, useRef } from "react";
import { Box, Grommet, Heading, Text, Image, Nav, Button } from "grommet";
import {
  StyledAnchor,
  ContentBox,
  ProjectBox,
  ProjectHeading,
  StlyedNFTCard,
  PpBox
} from "../styles/StyledComponents";
import Link from 'next/link';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import { SiUpwork, SiGithub, SiLinkedin } from "react-icons/si";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const aboutSection = useRef(null);
  const projectSection = useRef(null);
  const textColor = () => (theme == "light" ? "black" : "white");
  const accentTextColor = () => (theme == "light" ? "brand" : "pink");
  const openLinkTab = (url) => window.open(url, '_blank', 'noopener,noreferrer')
  return (
    <Grommet
      className={styles.themeBody}
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
        <ContentBox
          background={
            theme == "light" ? { color: "#f4eee4" } : { color: "#252525" }
          }
          direction="column"
          pad="medium"
        >
          <PpBox ref={aboutSection} id="about">
            <Box direction="column" fill>
              <Text color={textColor} className={styles.nameText} weight="bold">
                Jason Barrella
              </Text>
              <Box height="10px" />
              <Text className={styles.rolesText} color="red">
                Data Science / Blockchain / Full-Stack
              </Text>
            </Box>
            <Box
              border={{ color: "#FFCA58", size: "6px" }}
              className={styles.ppImageBox}
            >
              <Image fill src="/images/pp2.png"></Image>
            </Box>
          </PpBox>
          <Text margin={{ top: "30px" }} bioText color={textColor}>
            I am a 2022 Masters graduate in high-energy physics from the University of Cape
            Town. I have since been working as a freelance software
            developer. I have a passion for solving difficult problems related
            to STEM fields. When not working, I enjoy climbing, reading, and
            travelling.
          </Text>
          <Box height="40px" />
          <Nav gap="15px" alignSelf="end" className={styles.socials} direction="row">
            <StyledAnchor
              icon={<SiGithub size="22px" />}
              onClick={() => openLinkTab('https://github.com/jbarrella')}
            />
            <StyledAnchor
              icon={<SiLinkedin size="22px" />}
              onClick={() => openLinkTab('https://www.linkedin.com/in/jason-barrella-725910178/')}

            />
            <StyledAnchor
              icon={<SiUpwork size="22px" />}
              onClick={() => openLinkTab('https://www.upwork.com/freelancers/~0169fe33838c5e48c9')}

            />
          </Nav>
        </ContentBox>
        <ContentBox
          background={
            theme == "light" ? { color: "#f4eee4" } : { color: "#252525" }
          }
          pad="medium"
          direction="column"
        >
          <Text className={styles.sectionHeading} size="23px" color={textColor}>
            History
          </Text>
          <Timeline theme={theme} />
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
        </ContentBox>
        <ContentBox
          background={
            theme == "light" ? { color: "#f4eee4" } : { color: "#252525" }
          }
          pad="medium"
          direction="column"
        >
          <Text className={styles.sectionHeading} size="23px" color={textColor}>
            Technologies
          </Text>
          <Text>
            Python, JavaScript, C++, React, Docker, RESTful APIs, Linux, Git
          </Text>
        </ContentBox>
      </Box>
      <ProjectHeading
        fill
        id="projects"
        ref={projectSection}
        color={textColor}
        textAlign="center"
        className={styles.projectHeading}
      // size="80px"
      >
        Projects
      </ProjectHeading>
      <Box
        margin={{ bottom: "100px" }}
        justify="center"
        align="center"
        direction="column"
      >
        <ProjectBox>
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            href="/gametheory"
          >
            <StlyedNFTCard justify="center" height="100px" elevation="none">
              <Heading className={styles.projectBoxText} color="white" level="3">
                Quantitative Analysis of Game Theory Problem
              </Heading>
              <img
                src="https://cdn.knownorigin.io/cdn/images/network/1/edition/2643000"
                className={styles.projectBoxBackground}
              />
            </StlyedNFTCard>
          </Link>
          <a
            style={{ color: "inherit", textDecoration: "none" }}
            href="https://rentmap.netlify.app"
          >
            <StlyedNFTCard justify="center" height="100px" elevation="none">
              <Heading className={styles.projectBoxText} color="white" level="3">
                Rent Map
              </Heading>
              <img
                src="images/rentmap/rentmapBackground.png"
                className={`${styles.projectBoxBackground} ${styles.rentmapBackground}`}
              />
            </StlyedNFTCard>
          </a>
          {/* <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to="/stats"
          >
            <StlyedNFTCard
              justify="center"
              height="100px"
              background={{
                image:
                  "url(https://lh3.googleusercontent.com/78l4OIBoVU9tWN32TAHHKFHnQ-PQMQYmvSeMvtAt1t01VWWxWTFI4_12nw6o4yvoQGkLv9akAi5iBNQ6YvPXfEmg)",
                size: "cover",
              }}
              elevation="none"
            >
              <Heading color="white" level="3">
                Art NFT Stats
              </Heading>
            </StlyedNFTCard>
          </Link> */}
        </ProjectBox>
      </Box>
    </Grommet>
  );
}
