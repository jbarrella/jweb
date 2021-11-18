import NavBar from "./NavBar";
import Interactive from "./Interactive";
import { Box, Grommet, Heading, Text, Image, Grid, Button } from "grommet";
import { ContentBox, StyledAnchor } from "./StyledComponents";
import { SiGithub } from "react-icons/si";

import "./gametheory.css";

export default function GameTheory({ theme, setTheme }) {
  const textColor = () => (theme == "light" ? "black" : "white");
  return (
    <Grommet>
      <NavBar theme={theme} setTheme={setTheme} />
      <Heading
        color={textColor()}
        margin={{ bottom: "60px", right: "5vw", left: "5vw" }}
        fill
        textAlign="center"
      >
        Quantitative Analysis of Game Theory Problem
      </Heading>
      <Box fill direction="column">
        <ContentBox
          alignSelf="center"
          background={
            theme == "light" ? { color: "#f4eee4" } : { color: "#252525" }
          }
          pad="medium"
          direction="column"
        >
          <Text className="sectionHeading" size="23px" color={textColor()}>
            The Problem
          </Text>
          <Box gap="medium">
            <Text margin={{ right: "40px" }} color={textColor()}>
              This problem was solved as part of the interview process for the
              proprietary trading firm, Optiver. <br />
              <br />
              Imagine that there are some number of contestants who each have to
              select a unique real number{" "}
              <span style={{ "font-weight": "bold" }}>x</span> in the range [0,
              1], that is <span style={{ "font-weight": "bold" }}>x</span>{" "}
              &isin; &#8477; | 0 &le;{" "}
              <span style={{ "font-weight": "bold" }}>x</span> &le; 1. After all
              contestants have made their selections, a random real number in
              the same range is drawn from a uniform distribution. The
              contestant who’s number is closest to the randomly drawn number is
              the winner. <br />
              <br />
              Three questions were posed surrounding the optimal moves for each
              player in cases of 3 and 4 contestants.
            </Text>
            <Box
              alignSelf="center"
              height="50%"
              justify="center"
              pad="small"
              className="introImageBox"
            >
              <Image
                fill="horizontal"
                src="images/gametheory/Scratch_1_-removebg-preview.png"
              ></Image>
            </Box>
          </Box>
        </ContentBox>
        <ContentBox
          alignSelf="center"
          background={
            theme == "light" ? { color: "#f4eee4" } : { color: "#252525" }
          }
          pad="medium"
          direction="column"
        >
          <Text className="sectionHeading" size="23px" color={textColor()}>
            Solution
          </Text>
          <div className="solutionGrid">
            <Text textAlign="center" className="text1" color={textColor}>
              Both analytical and numerical solutions were developed. Put
              simply, the goal for each player is to maximize the sum of the
              space that is nearest to them on either sides. As it turns out,
              this can be reduced to maximizing outside space, that is space
              between the player and either end of the board line that is not
              obstructed by another player. This space is essestially worth
              twice as more as any inside space since it is not shared with
              another player.
            </Text>
            <Box
              alignSelf="center"
              width={{ max: "180%" }}
              justify="center"
              pad="small"
              className="bImageBox"
            >
              <Image width="100%" src="images/gametheory/b.png"></Image>
            </Box>
            <Box className="text2" margin={{ top: "30px", bottom: "30px" }}>
              <Text textAlign="center" color={textColor}>
                In the first question, contestant A plays 0 and we are asked to
                determine the optimal move for contestant B. In order to
                maximize outside space, contestant B should simply play 2/3 of
                the way up the remaining space on the board-line. In fact, this
                is the best strategy for all opening moves of contestant A that
                are &lt; 1/4 or &gt; 3/4, keeping in mind the symmetry of the
                problem.
              </Text>
            </Box>
            <Box
              alignSelf="center"
              width={{ max: "180%" }}
              justify="center"
              pad="small"
              className="aImageBox"
            >
              <Image width="100%" src="images/gametheory/aprob.png"></Image>
            </Box>
            <Text textAlign="center" className="text3" color={textColor}>
              The optimal move for contestant A is exactly 1/4 (or 3/4, by
              symmetry). This will force contestant B to play 2/3 along the
              remaining space of the board-line as described before and
              contestant C will play in between A and B. This will leave
              contestant A with outside space. If they were to play &lt; 1/4,
              the moves by B and C would be the same and valuable board-space
              would be sacrificed for no reason. If they played &gt; 1/4 and
              &lt; 3/4, contestant B is able to divide the remaining board space
              into two parts that are both of less value to contestant C than if
              they were to simply play right next to contestant A which results
              in a significantly lower probability of winning for contestant A.
            </Text>
          </div>
          <Box
            margin={{ top: "60px" }}
            width="200px"
            align="center"
            alignSelf="center"
            gap="small"
          >
            <Button
              primary={true}
              size="large"
              href="/documents/optiver_quant_researcher_application.pdf"
              label="Full Report"
            ></Button>
            <StyledAnchor
              icon={<SiGithub size="50px" />}
              href="https://github.com/jbarrella/optiver-interview"
            />
          </Box>
        </ContentBox>
        <ContentBox
          alignSelf="center"
          justify="center"
          background={
            theme == "light" ? { color: "#f4eee4" } : { color: "#252525" }
          }
          pad="medium"
        >
          <Text className="sectionHeading" size="23px" color={textColor()}>
            Interactive Illustration
          </Text>
          <Interactive dltheme={theme} />
        </ContentBox>
      </Box>
    </Grommet>
  );
}
