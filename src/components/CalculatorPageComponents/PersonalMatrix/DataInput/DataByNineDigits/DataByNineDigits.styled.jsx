import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BackCard = styled(motion.div)`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(249, 237, 255, 0.3) 100%
  );
  border: 0.5px solid #72499b;
  border-radius: 14px;
  padding: 36px 58px 68px;
  backface-visibility: hidden;
  margin-bottom: 25px;
  position: absolute;
  top: 0;
  left: 0;
  height: 210px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 430px;
    height: 278px;
    left: calc(50% - (430px / 2));
    padding: 48px 55px 68px;
  }

`;

export const DataList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

export const DataInput = styled.input`
  padding-left: 10px;
  width: 67px;
  height: 35px;
  font-family: ${p => p.theme.fonts.digits};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.31;
  color: rgba(73, 73, 73, 0.8);

  background-color: rgba(255, 255, 255, 0.5);
  border: 0.6px solid rgba(221, 197, 255, 0.6);
  border-radius: 5px;
  &:focus-within {
    border: 2px solid rgba(221, 197, 255, 0.8);
    outline: none;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 88px;
    height: 47px;
    font-size: 21px;
    line-height: 1.33;
  }

`;
