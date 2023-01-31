import styled from "styled-components";
import { position, layout } from 'styled-system';
import 'animate.css/animate.min.css';


export const Puzzle = styled.img`
  width: 170px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 260px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 220px;
  }
`;

export const AnimatedPuzzle = styled.div`
  position: absolute;
  bottom: -20px;
  left: 40px;

  &.animate__hinge {
    animation-name: hinge;
    animation-duration: 5.5s;
    animation-iteration-count: infinite;
  }

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    bottom: 20px;
    left: 55px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    bottom: 70px;
    left: 0;
  }
`;

export const PuzzleText = styled.p`
  position: absolute;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.24;

  color: ${p => p.theme.colors.secondText};

  text-align: center;
  z-index: 10;
  transform: rotate(${p => (p.rotate ? p.rotate : '0')});
  :last-child {
    display: none;
    ${layout}
  }
  ${position}
  ${layout}

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    text-align: left;
    font-size: 22px;
    transform: rotate(${p => (p.rt ? p.rt : '0')});

    :last-child {
      display: block;
    }
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const MatrixImg = styled.img`
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 600px;
  }
`;