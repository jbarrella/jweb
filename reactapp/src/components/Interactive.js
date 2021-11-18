import { Grommet, Box, RangeInput, Stack, Text, TextInput } from "grommet";
import { useState, useRef, useEffect } from "react";
import "./interactive.css";

const theme = {
  global: { focus: { outline: { size: "0px" } } },
  rangeInput: {
    thumb: {
      color: "accent-2",
    },
    track: { height: "0px" },
  },
};

export default function Interactive({ dltheme }) {
  const textColor = () => (dltheme == "light" ? "black" : "white");
  const [apos, setAPos] = useState(0);
  const epsilon = 0.01;
  const canvas = useRef(null);
  const getBPos = () => {
    if (apos <= 0.5) {
      if (apos <= 0.25) {
        return (2 * (1 - apos)) / 3 + apos;
      } else {
        return 1 - apos + epsilon;
      }
    } else {
      if (apos >= 0.75) {
        return apos / 3;
      } else {
        return 1 - apos + epsilon;
      }
    }
  };
  const getCPos = () => {
    const bpos = getBPos();
    if (apos <= 0.5) {
      if (apos <= 0.25) {
        return (apos + bpos) / 2;
      } else {
        return apos - epsilon;
      }
    } else {
      if (apos >= 0.75) {
        return (apos - bpos) / 2 + bpos;
      } else {
        return apos + epsilon;
      }
    }
  };
  const getLineColor = (nodePos) => {
    const bpos = getBPos();
    const cpos = getCPos();
    switch (nodePos) {
      case apos:
        return "#FD6FFF";
      case bpos:
        return "#81FCED";
      case cpos:
        return "#FFCA58";
    }
  };
  const draw = () => {
    const bpos = getBPos();
    const cpos = getCPos();
    const lineYPos = 150;
    const cwidth = canvas.current.width;
    const cheight = canvas.current.height;
    console.log(cwidth);
    var ctx = canvas.current.getContext("2d");
    ctx.clearRect(0, 0, 700, 300);
    ctx.lineWidth = 4;
    ctx.strokeStyle = textColor();

    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(0, 130);
    ctx.lineTo(0, 170);
    ctx.moveTo(0, lineYPos);
    ctx.lineTo(700, lineYPos);
    ctx.lineTo(700, 170);
    ctx.lineTo(700, 130);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 10]);
    ctx.moveTo(185, 100);
    ctx.lineTo(185, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(700 - 185, 100);
    ctx.lineTo(700 - 185, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(700 / 2, 80);
    ctx.lineTo(700 / 2, 220);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.arc(700 * bpos, lineYPos, 12, 0, 2 * Math.PI);
    ctx.fillStyle = "#81FCED";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(700 * cpos, lineYPos, 12, 0, 2 * Math.PI);
    ctx.fillStyle = "#FFCA58";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    var node1Pos = Math.min(apos, bpos, cpos);
    ctx.strokeStyle = getLineColor(node1Pos);
    ctx.shadowColor = getLineColor(node1Pos);
    ctx.lineWidth = 8;
    ctx.globalAlpha = 0.35;
    ctx.shadowBlur = 8;
    ctx.moveTo(0, lineYPos);
    var node2Pos = [apos, bpos, cpos].sort()[1];
    var halfPoint1 = (node1Pos + node2Pos) / 2;
    ctx.lineTo(700 * halfPoint1, lineYPos);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = getLineColor(node2Pos);
    ctx.shadowColor = getLineColor(node2Pos);
    ctx.moveTo(700 * halfPoint1, lineYPos);
    var node3Pos = Math.max(apos, bpos, cpos);
    var halfPoint2 = (node2Pos + node3Pos) / 2;
    ctx.lineTo(700 * halfPoint2, lineYPos);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = getLineColor(node3Pos);
    ctx.shadowColor = getLineColor(node3Pos);
    ctx.moveTo(700 * halfPoint2, lineYPos);
    ctx.lineTo(700, lineYPos);
    ctx.stroke();

    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1.0;
    ctx.font = "22px Roboto Mono";
    ctx.fillStyle = "black";
    ctx.fillText("B", 700 * bpos - 6, lineYPos + 8);
    ctx.fillText("C", 700 * cpos - 7, lineYPos + 8);
    ctx.font = "22px Roboto Mono";
    ctx.fillStyle = textColor();
    ctx.fillText("0.5", 700 / 2 - 20, lineYPos - 90);
    ctx.font = "17px Roboto Mono";
    ctx.fillText("0.25", 700 / 4 - 6, lineYPos - 70);
    ctx.fillText("0.75", (3 * 700) / 4 - 25, lineYPos - 70);
  };
  useEffect(() => {
    draw();
  }, [apos, dltheme]);
  return (
    <Grommet theme={theme}>
      <div className="slidecontainer">
        <Box direction="row" gap="small">
          <Text size="30px" color="accent-2">
            A
          </Text>
          <Text size="30px">=</Text>
          <Box width="60px" background={{ color: "white" }}>
            <TextInput
              size="medium"
              value={apos}
              onChange={(event) => setAPos(parseFloat(event.target.value))}
            />
          </Box>
        </Box>
        <Stack anchor="center">
          <Box fill width="720px">
            <canvas
              className="canvas"
              ref={canvas}
              width="700"
              height="300"
            ></canvas>
          </Box>
          <Box className="rangeBox">
            <RangeInput
              min="0"
              max="100"
              value={apos * 100}
              onChange={(event) => setAPos(event.target.value / 100)}
            />
          </Box>
        </Stack>
      </div>
    </Grommet>
  );
}
