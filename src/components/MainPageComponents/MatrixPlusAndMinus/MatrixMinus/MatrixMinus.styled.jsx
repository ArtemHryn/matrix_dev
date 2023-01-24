import styled from "styled-components";
import { position, layout } from 'styled-system';
import 'animate.css/animate.min.css';


export const Puzzle = styled.img`
  width: 170px;
`;

export const AnimatedPuzzle = styled.div`
  position: absolute;
  bottom: -20px;
  left: 40px;

  &.animate__hinge {
    animation-name: hinge;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
`;

export const PuzzleText = styled.p`
  position: absolute;
  text-align: center;
  z-index: 10;
  transform: rotate(${p => (p.rotate ? p.rotate : '0')});
  ${position}
  ${layout}
`;
