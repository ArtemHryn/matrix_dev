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

`;

export const DataList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

export const DataInput = styled.input`
  width: 67px;
  height: 35px;
`;
