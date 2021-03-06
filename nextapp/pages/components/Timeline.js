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
import styles from "./timeline.module.css";

export default function Timeline({ theme }) {
  const textColor = () => (theme == "light" ? "black" : "white");
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
    <Stack guidingChild={1}>
      <Diagram connections={timelineNodes.map(linkNodes)} />
      <Box>
        <Box direction="column">
          <Box direction="row">
            <Box
              border={{ size: "5px", color: textColor() }}
              className={styles.timelineNode1}
              id="1"
            />
            <Text color={textColor} className={styles.text} margin={{ left: "20px" }}>
              <b>2016</b> - Began a{" "}
              <span style={{ color: "#FD6FFF" }}>Degree</span> in Physics &
              Astrophysics at the University of Cape Town.
            </Text>
          </Box>
          <Box direction="row">
            <Box
              border={{ size: "5px", color: textColor() }}
              className={styles.timelineNode3}
              id="2"
            />
            <Text color={textColor} className={styles.text} margin={{ left: "20px" }}>
              <b>2016</b> - Tool-assisted{" "}
              <span style={{ color: "#FD6FFF" }}>trading</span> of digital
              assets.
            </Text>
          </Box>
          <Box direction="row">
            <Box
              border={{ size: "5px", color: textColor() }}
              className={styles.timelineNode2}
              id="3"
            />
            <Text color={textColor} className={styles.text} margin={{ left: "20px" }}>
              <b>2018</b> - Wrote and deployed a high-frequency{" "}
              <span style={{ color: "#FD6FFF" }}>cryptocurrency arbitrage</span>{" "}
              trading bot.
            </Text>
          </Box>
          <Box direction="row">
            <Box
              border={{ size: "5px", color: textColor() }}
              className={styles.timelineNode2}
              id="4"
            />
            <Text color={textColor} className={styles.text} margin={{ left: "20px" }}>
              <b>2019</b> - Completed B.Sc. Honours degree in Physics.
            </Text>
          </Box>
          <Box direction="row">
            <Box
              border={{ size: "5px", color: textColor() }}
              className={styles.timelineNode1}
              id="5"
            />
            <Text color={textColor} className={styles.text} margin={{ left: "20px" }}>
              <b>2020</b> - <span style={{ color: "#FD6FFF" }}> Tutoring</span>{" "}
              in honours level computational physics.
            </Text>
          </Box>
          <Box direction="row">
            <Box
              border={{ size: "5px", color: textColor() }}
              className={styles.timelineNode2}
              id="6"
            />
            <Text color={textColor} className={styles.text} margin={{ left: "20px" }}>
              <b>2020</b> - Began a
              <span style={{ color: "#FD6FFF" }}> Masters degree</span> in
              high-energy physics.
            </Text>
          </Box>
          <Box direction="row">
            <Box
              border={{ size: "5px", color: textColor() }}
              className={styles.timelineNode1}
              id="7"
            />
            <Text color={textColor} className={styles.text} margin={{ left: "20px" }}>
              <b>2021</b> - Worked as a
              <span style={{ color: "#FD6FFF" }}> freelance</span> software
              developer on Upwork.
            </Text>
          </Box>
          <Box direction="row">
            <Box
              border={{ size: "5px", color: textColor() }}
              className={styles.timelineNode1}
              id="8"
            />
            <Text color={textColor} className={styles.text} margin={{ left: "20px" }}>
              <b>2021</b> - <span style={{ color: "#FD6FFF" }}>Tutoring</span>{" "}
              in 3rd year electrodynamics and special relativity.
            </Text>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
