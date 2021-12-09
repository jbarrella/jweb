import { React } from "react";
import { Heading, Grommet, Box, Button } from "grommet";
import { Sun, Moon, Menu as MenuIcon } from "grommet-icons";
import { useNavigate, useLocation } from "react-router-dom";
import {
  StyledHomeLink,
  ThemeSwitch,
  StyledPageLink,
  Hamburger,
  HamburgerBox,
} from "./StyledComponents";
import "./navbar.css";

export default function Home({ projectSection, aboutSection, theme, setTheme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const handleSectionLink = (sectionRef, sectionId) => {
    if (location.pathname === "/") {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      setTimeout(() => {
        document.getElementById(sectionId).scrollIntoView();
      }, 0);
    }
  };
  return (
    <Grommet>
      <div className="headerDiv">
        <Box className="sectionLinks" direction="row" gap="medium">
          <Heading
            alignSelf="end"
            level="2"
            margin={{ bottom: "10px", right: "20px" }}
            color="#7f6df2"
          >
            <StyledHomeLink className="title-mobile" to="/">
              JB
            </StyledHomeLink>
            <StyledHomeLink className="title-desktop" to="/">
              Jason Barrella
            </StyledHomeLink>
          </Heading>
          <Heading
            color="#7f6df2"
            alignSelf="end"
            level="3"
            margin={{ bottom: "10px" }}
            className="buttons"
          >
            <StyledPageLink to="/">
              <Button
                onClick={() => {
                  handleSectionLink(aboutSection, "about");
                }}
                className="sectionButton"
                focusIndicator={false}
              >
                About
              </Button>
            </StyledPageLink>
          </Heading>
          <Heading
            color="#7f6df2"
            alignSelf="end"
            level="3"
            margin={{ bottom: "10px" }}
            className="buttons"
          >
            <StyledPageLink to="/">
              <Button
                onClick={() => {
                  handleSectionLink(projectSection, "projects");
                }}
                className="sectionButton"
                focusIndicator={false}
              >
                Projects
              </Button>
            </StyledPageLink>
          </Heading>
        </Box>
        <Box
          width="150px"
          direction="row"
          className="buttonBox"
          gap="medium"
          justify="end"
        >
          <ThemeSwitch
            border={{ color: "accent-1", size: "3px" }}
            alignSelf="end"
            width="53px"
            height="53px"
          >
            <Button
              focusIndicator={false}
              icon={
                theme === "light" ? (
                  <Moon color="black" size="25px" />
                ) : (
                  <Sun color="white" className="lightIcon" size="25px" />
                )
              }
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            ></Button>
          </ThemeSwitch>
          <HamburgerBox
            alignSelf="end"
            justify="center"
            width="53px"
            height="53px"
            background={{ color: "white" }}
            className="menuBox"
          >
            <Hamburger
              className="menu"
              focusIndicator={false}
              icon={<MenuIcon size="25px" />}
              items={[
                {
                  label: "About",
                  onClick: () => {
                    navigate("/");
                    handleSectionLink(aboutSection, "about");
                  },
                },
                {
                  label: "Projects",
                  onClick: () => {
                    navigate("/");
                    handleSectionLink(projectSection, "projects");
                  },
                },
              ]}
            ></Hamburger>
          </HamburgerBox>
        </Box>
      </div>
    </Grommet>
  );
}
