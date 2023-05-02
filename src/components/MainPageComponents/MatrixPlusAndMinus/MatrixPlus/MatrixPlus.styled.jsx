import styled from 'styled-components';
import { position, layout } from 'styled-system';
import { motion } from 'framer-motion';


export const PuzzleTextPlus = styled.p`
  position: absolute;

  font-size: 17px;
  line-height: 1.24;
  text-align: center;

  color: ${p => p.theme.colors.secondText};
  ${position}
  ${layout}
  :last-child {
    display: none;
  }

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 22px;
    text-align: left;
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

export const MatrixContainer = styled(motion.div)`
  align-self: center;
`