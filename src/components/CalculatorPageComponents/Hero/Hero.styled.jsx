import styled from 'styled-components';
import { motion } from 'framer-motion';
import { layout, position } from 'styled-system';

export const HeroStar = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72vw;
  height: 50px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 62vw;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    height: 500px;
  }
  ${position}
  ${layout}
`;

export const Logo = styled.p`
  font-family: ${p => p.theme.fonts.title};
  font-size: 26px;
  line-height: 0.66;
  text-align: center;

  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};
  margin-bottom: 45px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 40px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 36px;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 55px;
  line-height: 0.8;

  text-align: center;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};
  margin-bottom: 35px;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 100px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 115px;
    width: 1000px;
    margin: 0 auto 25px;
  }
`;

export const SecondTitle = styled.span`
  font-style: italic;
  display: block;
  margin-top: 7px;
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 127px;
  }
`;

export const AboutCalc = styled.p`
  font-size: 17px;
  line-height: 1.24;
  text-align: center;
  letter-spacing: 0.01em;
  font-weight: 600;
  color: ${p => p.theme.colors.main};
  margin-bottom: 53px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 28px;
    line-height: 1.22;

    width: 480px;
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 28px;
    line-height: 1.21;
    width: 100%;
    margin-bottom: 47px;
  }
`;

export const Authoring = styled.p`
  font-size: 12px;
  line-height: 1.25;
  margin: 0 auto;
  text-align: center;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};
  width: 251px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 17px;
    line-height: 1.24;
    width: 365px;
  }
`;
