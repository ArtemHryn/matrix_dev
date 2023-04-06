import { motion } from 'framer-motion';
import styled from 'styled-components';
import { space } from 'styled-system';

export const FrontCard = styled(motion.div)`
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
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.5);
  border: 0.6px solid rgba(221, 197, 255, 0.6);
  border-radius: 6px;
  width: 100%;
  height: 35px;
  padding: 10px 14px;
  ${space}
  &:focus-within {
    border: 2px solid rgba(221, 197, 255, 0.8);
    outline: none;
  }
`;
