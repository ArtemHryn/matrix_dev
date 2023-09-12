import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalContainerBox = styled.div`
  position: relative;
  height: 100%;
  max-width: ${p => p.theme.sizes.mobileModal};
  background-color: #fff;
  background-image: linear-gradient(
    to right bottom,
    rgba(253, 221, 247, 0.5) 5%,
    rgba(233, 218, 255, 0.5) 10%,
    rgba(255, 255, 255, 1) 35%,
    rgba(255, 255, 255, 1) 65%,
    rgba(233, 218, 255, 0.5) 80%,
    rgba(253, 221, 247, 0.5) 100%
  );
  border-radius: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 101;
  padding-top: 20px;
  ::-webkit-scrollbar {
    width: 2px; /* Ширина скроллбару */
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f7d0f7; /* Колір скроллбару */
    border-radius: 6px; /* Закруглені кути скроллбару */
  }

  ::-webkit-scrollbar-track {
    background-color: #f0f0f0; /* Колір фону за скроллбаром */
    margin: 30px 0;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    max-width: ${p => p.theme.sizes.tabletModal};
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1250px;
    padding-top: 34px;
  }
`;

export const Button = styled.button`
  display: block;

  margin: 0 auto 49px;
  background-color: transparent;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    position: absolute;
    top: 30px;
    right: 30px;
    margin-bottom: 0px;
    z-index: 10;
  }
`;

export const AnimatedContainer = styled(motion.div)`
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    min-height: 1240px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    min-height: 550px;
  }
`;

export const ModalTitle = styled.h1`
  font-size: 40px;
  font-weight: 500;
  line-height: 1; /* 100% */
  letter-spacing: 0.025em;
  text-wrap: balance;
  margin-bottom: 24px;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 56px;
    margin-bottom: 36px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 40px;
    line-height: 0.85;
    margin-bottom: 14px;
  }
`;

export const Description = styled.p`
  font-size: 19px;
  line-height: 1.1;
  letter-spacing: 0.01em;
  margin-bottom: 30px;
  text-wrap: balance;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 24px;
    margin-bottom: 36px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 23px;
    margin-bottom: 44px;
    line-height: 1;
    font-weight: 600;
  }
`;

export const Price = styled.p`
  font-size: 40px;
  font-weight: 400;
  line-height: 0.8;
  letter-spacing: 0.025em;
  font-family: ${p => p.theme.fonts.digits};
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 60px;
    margin-bottom: 0px;
    line-height: 0.8;
    font-weight: 400;
    letter-spacing: 0.03em;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.main};

  color: #fff;
  font-family: Cormorant Infant;
  font-size: 17px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 506px;

    font-size: 23px;
    letter-spacing: 0.015em;
    margin: 0 auto;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 336px;
    font-size: 19px;
    letter-spacing: 0.03em;
    margin: 0;
  }
`;

export const Img = styled.img`
  max-height: 336px;
  margin: 0 auto;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    max-height: 500px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    max-height: 530px;
  }
`;
