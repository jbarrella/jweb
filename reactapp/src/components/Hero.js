import { Box, Grommet, Anchor } from "grommet";
import { GreetText, MottoText } from "./StyledComponents";
import "./hero.css";

export default function Hero() {
  // const video = useRef(null);
  // video.play();
  // // document.getElementById("video").play();
  const HeroBackground = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 500) {
      return (
        <video
          playsInline={1}
          autoPlay={1}
          loop={1}
          muted={1}
          className="video"
          poster="images/frame1.png"
        >
          <source src="images/mobius_bind.mp4" type="video/mp4" />
        </video>
      )
    } else {
      return (
        <img
          className="video"
          src="images/mobius_bind.gif" />
      )
    }
  }
  return (
    <Grommet>
      <div className="heroBox">
        <HeroBackground />
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
