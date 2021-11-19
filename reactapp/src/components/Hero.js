import { Box, Grid, Grommet, Video, Text, Stack, Anchor } from "grommet";
import { HeroBox, GreetText, MottoText } from "./StyledComponents";
import "./hero.css";
import { useRef } from "react";

export default function Hero() {
  // const video = useRef(null);
  // video.play();
  // // document.getElementById("video").play();
  return (
    <Grommet>
      <div className="heroBox">
        <video
          id="video"
          playsInline={1}
          // ref={video}
          autoplay={1}
          loop={1}
          muted={1}
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
