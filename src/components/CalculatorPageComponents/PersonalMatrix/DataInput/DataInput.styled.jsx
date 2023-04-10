import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ReactComponent as FlipToBack } from 'images/Calculator/personalMatrix/flipToBack.svg';


export const Form = styled.form`
  position: relative;
`;

export const FlipButton = styled(motion.button)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 16px;
  right: 14px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.text};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    top: 19px;
    right: 23px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    top: 18px;
    right: 22px;
  }
`;

export const FlipButtonSvg = styled(FlipToBack)`
  width: 20px;
  height: 20px;
`

export const BoxTitle = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.23;

  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  color: ${p => p.theme.colors.text};
  margin-bottom: 15px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 18px;
  }
`;

export const SubmitBtn = styled(motion.button)`
  display: flex;
  width: 196px;
  height: 40px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 0 auto;

  font-family: ${p => p.theme.fonts.button};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  color: ${p => p.theme.colors.text};
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 303px;
    height: 52px;
    font-size: 18px;
    line-height: 1.22;
  }
`;
