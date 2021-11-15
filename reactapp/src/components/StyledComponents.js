import { Card, Anchor, Heading, Box } from "grommet";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    /* color: #7d4cdb; */
    transition: color 0.3s ease-in;
  }
  &:hover {
    color: #6fffb0;
  }
`;

export const StlyedNFTCard = styled(Card)`
  transition: transform 0.5s ease;
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
  grid-area: 1 / 3 / 1 / 3;
  border-radius: 10px;
  justify-self: right;
  &:hover {
    background-color: #bbbbbb;
    transition: background-color 0.3s linear;
  }
`;

export const HeroBox = styled(Box)`
  border-radius: 20px;
  &::after {
    background-color: blue;
  }
`;
