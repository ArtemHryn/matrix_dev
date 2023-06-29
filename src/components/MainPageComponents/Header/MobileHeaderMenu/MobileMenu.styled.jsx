import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MenuList = styled.ul`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  min-height: 342px;
  background-color: rgba(255, 255, 255, 0.93);
  border-radius: 30px;
  padding: 30px;
`;

export const CloseModal = styled.img`
  background-color: rgba(255, 255, 255, 0.8);
  width: 24px;
  height: 24px;
`;

export const MenuItem = styled.li`
  margin-bottom: 18px;
  :first-child {
    margin-bottom: 40px;
  }
`;

export const MenuLink = styled.a`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;

  color: #000000;
`;

export const OpenModalButton = styled.img`
  background-color: transparent;
`;

export const OpenBtn = styled(motion.button)`
  background-color: transparent;
`