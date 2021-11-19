import { Box, Grid, Grommet, Video, Text, Stack, Anchor } from "grommet";
import { HeroBox, GreetText, MottoText } from "./StyledComponents";
import "./hero.css";

export default function Hero() {
  return (
    <Grommet>
      <div className="heroBox">
        <video
          autoplay={1}
          loop
          muted
          className="video"
          poster="images/frame1.png"
        >
          <source src="images/mobius_bind.mp4" type="video/mp4" />
        </video>
        <Box justify="center" className="heroTextBox">
          <GreetText color="white">Hi, I'm Jason.</GreetText>
          <MottoText color="white">I write &lt;code&gt;</MottoText>
        </Box>
        <Box justify="end" className="heroCredit" height="50px">
          <Box pad="15px" alignSelf="end">
            <Anchor
              label="@pak"
              size="small"
              color="dark-6"
              href="https://superrare.com/pak"
            />
          </Box>
        </Box>
      </div>
    </Grommet>
  );
}
