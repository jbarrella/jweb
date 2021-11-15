import { Box, Grid, Grommet, Video, Text, Stack, Anchor } from "grommet";
import { HeroBox } from "./StyledComponents";
import "./hero.css";

export default function Hero() {
  return (
    <Grommet>
      <div
        // justify="center"
        // height="500px"
        // margin={{ bottom: "50px" }}
        // margin={{ right: "100px", left: "100px", bottom: "50px" }}
        // background={{
        //   image: "url(/images/gametheory_prisoners_dilemma.gif)",
        //   opacity: "0.6",
        // }}
        className="heroBox"
      >
        <Box height="450px" justify="center" className="heroTextBox">
          <Text color="white" size="100px">
            Hi, I'm Jason.
          </Text>
          <Text className="motto" color="white" size="50px">
            I write &lt;code&gt;
          </Text>
        </Box>
        <Box justify="end" className="heroCredit" height="50px">
          <Box pad="15px" alignSelf="end">
            <Anchor
              label="@pak"
              size="small"
              color="white"
              href="https://superrare.com/pak"
            />
          </Box>
        </Box>
      </div>
    </Grommet>
  );
}

// export default function Hero() {
//   return (
//     <Grommet>
//       <Grid
//         rows={["600px"]}
//         columns={["1/2", "1/2"]}
//         areas={[
//           { name: "text", start: [0, 0], end: [0, 0] },
//           { name: "image", start: [1, 0], end: [1, 0] },
//         ]}
//         margin={{ right: "250px", left: "250px" }}
//       >
//         <Box justify="center" gridArea="text">
//           <Text size="100px">Hello! I'm Jason</Text>
//         </Box>
//         <Box gridArea="image">
//           <Video loop={true} fit="contain" autoPlay={true} controls={false}>
//             <source
//               key="video"
//               src="https://ipfs.pixura.io/ipfs/QmbQhfwoFMjjo5GxdnFWi1tX6pxtjvZDPopuExYrQBJyRt/gametheory_prisoners_dilemma.mp4"
//               type="video/mp4"
//             />
//           </Video>
//         </Box>
//       </Grid>
//     </Grommet>
//   );
// }
