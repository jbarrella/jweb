import styles from "./Navbar.module.css";
import { React } from "react";
import { Heading, Grommet, Box, Button, Menu } from "grommet";
import { Sun, Moon, Menu as MenuIcon } from "grommet-icons";
// import { Link, useHistory, useLocation } from "react-router-dom";
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  // StyledHomeLink,
  ThemeSwitch,
  // StyledPageLink,
  Hamburger,
  HamburgerBox,
} from "./StyledComponents";

export default function Home({ projectSection, aboutSection, theme, setTheme }) {
  // const history = useHistory();
  const router = useRouter();
  const handleSectionLink = (sectionRef, sectionId) => {
    const { location } = useRouter()
    if (location.pathname == "/") {
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
      <div className={styles.headerDiv}>
        <Box className={styles.sectionLinks} direction="row" gap="medium">
          <Heading
            alignSelf="end"
            level="2"
            margin={{ bottom: "10px", right: "20px" }}
            color="#7f6df2"
          >
            <Link className={styles.titleMobile} href="/">
              JB
            </Link>
            <Link className={styles.titleDesktop} href="/">
              Jason Barrella
            </Link>
          </Heading>
          <Heading
            color="#7f6df2"
            alignSelf="end"
            level="3"
            margin={{ bottom: "10px" }}
            className={styles.buttons}
          >
            <Link href="/">
              <Button
                onClick={() => {
                  handleSectionLink(aboutSection, "about");
                }}
                focusIndicator={false}
              >
                About
              </Button>
            </Link>
          </Heading>
          <Heading
            color="#7f6df2"
            alignSelf="end"
            level="3"
            margin={{ bottom: "10px" }}
            className={styles.buttons}
          >
            <Link href="/">
              <Button
                onClick={() => {
                  handleSectionLink(projectSection, "projects");
                }}
                focusIndicator={false}
              >
                Projects
              </Button>
            </Link>
          </Heading>
        </Box>
        <Box
          width="150px"
          direction="row"
          className={styles.buttonBox}
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
                theme == "light" ? (
                  <Moon color="black" size="25px" />
                ) : (
                  <Sun color="white" size="25px" />
                )
              }
              onClick={() => setTheme(theme == "light" ? "dark" : "light")}
            ></Button>
          </ThemeSwitch>
          <HamburgerBox
            alignSelf="end"
            justify="center"
            width="53px"
            height="53px"
            background={{ color: "white" }}
          >
            <Hamburger
              className={styles.menu}
              focusIndicator={false}
              icon={<MenuIcon size="25px" />}
              items={[
                {
                  label: "About",
                  onClick: () => {
                    router.push("/");
                    handleSectionLink(aboutSection, "about");
                  },
                },
                {
                  label: "Projects",
                  onClick: () => {
                    router.push("/");
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
