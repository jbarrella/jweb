import { Box, Grommet, Anchor } from "grommet";
import { GreetText, MottoText } from "./StyledComponents";
import { useMemo, useState } from 'react';
import "./hero.css";

export default function Hero() {
  return (
    <Grommet>
      <div className="heroBox">
        <video
          playsInline={1}
          autoPlay={1}
          loop={1}
          muted={1}
          className="video"
          poster="images/frame1.png"
        >
          <source src="https://user-images.githubusercontent.com/32719308/145473742-667c2f96-72c4-4224-9be9-028515f87337.mp4" type="video/mp4" />
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
