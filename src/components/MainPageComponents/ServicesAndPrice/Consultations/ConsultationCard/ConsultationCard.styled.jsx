import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ConcultationCardElement = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    border-radius: 23px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    border-radius: 32px;
  }
`;

export const ConcultationCardText = styled.p`
  position: absolute;
  bottom: 16px;
  right: 50%;
  transform: translateX(50%);
  width: 85%;

  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.18;
  text-align: center;

  color: ${p => p.theme.colors.main};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    bottom: 36px;
    font-size: 22px;
    line-height: 1.22;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    bottom: 36px;
    font-size: 30px;
    line-height: 1.22;
  }
`;

export const DetailsContainer = styled(motion.div)`
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  background-color: rgba(216, 166, 255, 0.07);
  backdrop-filter: blur(7.5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShowDetailsButton = styled.button`
  width: 93.83px;
  height: 30px;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.main};
  border-radius: 50px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: 300;
  font-size: 12px;
  line-height: 1.1;

  letter-spacing: 0.03em;

  color: ${p => p.theme.colors.main};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 147px;
    height: 47px;
    font-size: 18px;
    line-height: 1.22;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 220px;
    height: 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`;
