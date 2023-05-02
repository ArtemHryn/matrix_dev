import { motion } from 'framer-motion';
import styled from 'styled-components';
import { space } from 'styled-system';

export const FrontCard = styled(motion.div)`
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(249, 237, 255, 0.3) 100%
  );
  border: 0.5px solid #72499b;
  border-radius: 14px;
  padding: 36px 42px 68px;
  backface-visibility: hidden;
  margin-bottom: 25px;
  height: 210px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 430px;
    height: 278px;
    margin: 0 auto 38px;
    padding: 48px 55px 68px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
  }
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.5);
  border: 0.6px solid rgba(221, 197, 255, 0.6);
  border-radius: 6px;
  width: 100%;
  height: 35px;
  padding: 10px 14px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;

  color: ${p => p.theme.colors.secondText};
  margin-bottom: 10px;
  ${space}
  &:focus-within {
    border: 2px solid rgba(221, 197, 255, 0.8);
    outline: none;
  }

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 47px;
    font-size: 21px;
  }
`;

export const Error = styled.p`
  text-align: center;
  color: #a40b8a;
  font-size: 20px;
  margin: 0 auto;
`;
