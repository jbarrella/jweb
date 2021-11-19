import { Card, Anchor, Heading, Box, Menu, Text } from "grommet";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const GreetText = styled(Text)`
  font-size: min(100px, 13vw);
`;

export const MottoText = styled(Text)`
  font-size: min(50px, 8vw);
  font-family: "roboto mono";
  margin-top: min(90px, 10vw);
`;

export const ContentBox = styled(Box)`
  border-radius: 20px;
  margin-bottom: 40px;
  width: clamp(50vw, 800px, 90vw);
`;

export const ProjectHeading = styled(Heading)`
  font-size: min(100px, 20vw);
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const PpBox = styled(Box)`
  flex-direction: row;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
  .nameText {
    font-size: min(50px, 10vw);
    line-height: 1.5;
  }
`;

export const StyledAnchor = styled(Anchor)`
  &:not(:hover) svg {
    stroke: #7f6df2;
    fill: #7f6df2;
    transition: stroke 0.3s ease-in, fill 0.3s linear;
  }
  &:hover svg {
    stroke: #6fffb0;
    fill: #6fffb0;
  }
`;

export const StyledHomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledPageLink = styled(StyledHomeLink)`
  &:not(:hover) {
    transition: color 0.3s ease-in;
  }
  &:hover {
    color: #6fffb0;
  }
`;

export const StlyedNFTCard = styled(Card)`
  position: relative;
  transition: transform 0.5s ease;
  padding: 25%;
  text-align: center;
  width: clamp(22vw, 340px, 90vw);
  &:hover {
    transform: scale(1.05);
  }
  &:hover h3 {
    color: #6fffb0;
    transition: color 0.3s ease;
  }
  &:not(:hover) h3 {
    color: white;
    transition: color 0.3s ease-in;
  }
`;

export const StyledHomeHeading = styled(Heading)`
  font-size: 200px;
`;

export const ThemeSwitch = styled(Box)`
  border-radius: 10px;
  justify-self: right;
  padding: 0;
  &:hover {
    background-color: #bbbbbb;
    transition: background-color 0.3s linear;
  }
`;

export const HamburgerBox = styled(ThemeSwitch)`
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const Hamburger = styled(Menu)`
  padding: 0;
  margin: 0;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const HeroBox = styled(Box)`
  border-radius: 20px;
  &::after {
    background-color: blue;
  }
`;

export const gameTheoryProjectBox = styled(Box)`
  &::after {
    background-color: blue;
  }
`;

export const ProjectBox = styled(Box)`
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
  @media screen and (min-width: 750px) {
    flex-direction: row;
  }
  gap: 50px;
`;
