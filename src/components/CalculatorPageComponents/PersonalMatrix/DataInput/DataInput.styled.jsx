import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Form = styled.form`
  position: relative;
`;

export const FlipButton = styled(motion.button)`
  position: absolute;
  top: 16px;
  right: 14px;
`;

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
`;

export const SubmitBtn = styled(motion.button)`
  display: flex;
  width: 196px;
  height: 40px;
  background: #ffffff;
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
`;
