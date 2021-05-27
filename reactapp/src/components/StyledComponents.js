import { Card, Anchor } from "grommet";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledAnchor = styled(Anchor)`
  &:not(:hover) svg {
    stroke: #7d4cdb;
    fill: #7d4cdb;
    transition: stroke 0.3s ease-in, fill 0.3s linear;
  }
  &:hover svg {
    stroke: #6fffb0;
    fill: #6fffb0;
  }
`;

export const StyledHomeLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
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
