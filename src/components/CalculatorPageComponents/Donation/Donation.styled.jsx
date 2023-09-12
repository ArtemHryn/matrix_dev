import styled from 'styled-components';
import { layout, flexbox } from 'styled-system';
import { motion } from 'framer-motion';
import { ReactComponent as BkmLogo } from 'images/Calculator/Donation/bmc-logo.svg';

export const LikeTheProject = styled.h3`
  max-width: 340px;
  font-weight: 600;
  font-size: 32px;
  line-height: 1;
  letter-spacing: 0.02em;

  margin-bottom: 25px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 40px;
    line-height: 1.1;
    max-width: 685px;
    margin-bottom: 31px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 50px;
    max-width: 60%;
  }
`;

export const SaveService = styled.p`
  font-size: 18px;
  line-height: 1.27;
  letter-spacing: 0.01em;
  margin-bottom: 67px;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 23px;
    font-weight: 600;
    line-height: 1.28;
    max-width: 430px;
    margin-bottom: 57px;
  }
`;

export const DonationLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 143px;
  height: 43px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 9px;

  font-style: italic;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.23;
  gap: 6px;

  color: ${p => p.theme.colors.main};
  margin-bottom: 10px;
  transition: all 250ms ease-in-out;

  ${flexbox}
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 257px;
    height: 77px;
    font-size: 41px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 300px;
    height: 90px;
    font-size: 41px;
    margin: 0;
  }
  ${layout}
`;

export const BkCoffeeLogo = styled(BkmLogo)`
  width: 22px;
  height: 31px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 35px;
    height: 50px;
  }
`;

export const MoonContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  top: 62%;
  right: 15%;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 250px;
    top: 45%;
    right: 5%;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 400px;
    top: 10%;
    right: 10%;
  }
`;
