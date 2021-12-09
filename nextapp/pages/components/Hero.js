import { Box, Grid, Grommet, Video, Text, Stack, Anchor } from "grommet";
import { HeroBox, GreetText, MottoText } from "../../styles/StyledComponents";
import styles from "./hero.module.css";
import { useRef } from "react";

export default function Hero() {
  // const video = useRef(null);
  // video.play();
  // // document.getElementById("video").play();
  return (
    <Grommet>
      <div className={styles.heroBox}>
        <video
          id="video"
          playsInline={1}
          // ref={video}
          autoPlay={1}
          loop={1}
          muted={1}
          className={styles.video}
          poster="images/frame1.png"
        >
          <source src="images/mobius_bind.mp4" type="video/mp4" />
        </video>
        <Box justify="center" className={styles.heroTextBox}>
          <GreetText color="white">Hi, I&apos;m Jason.</GreetText>
          <MottoText color="white">I write &lt;code&gt;</MottoText>
        </Box>
        <Box justify="end" className={styles.heroCredit} height="50px">
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
