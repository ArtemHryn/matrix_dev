import styled from 'styled-components';
import { typography, layout, position } from 'styled-system';
import { ReactComponent as BkmLogo } from 'images/Calculator/Donation/bmc-logo.svg';

export const LikeTheProject = styled.h3`
  max-width: 340px;
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 35px;
  line-height: 1.45;

  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};
  margin-bottom: 25px;
  ${typography}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 45px;
    line-height: 1.57;
    max-width: 685px;
    margin-bottom: 35px;
  }
`;

export const SaveService = styled.p`
  max-width: 230px;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.27;

  letter-spacing: 0.01em;

  color: #424242;
  margin-bottom: 67px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 25px;
    line-height: 1.28;
    max-width: 450px;
    margin-bottom: 110px;
  }
`;

export const DonationLink = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 4px 10px rgba(144, 114, 175, 0.28);
  border-radius: 9px;

  font-family: 'Cormorant';
  font-style: italic;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.23;

  color: ${p => p.theme.colors.main};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 310px;
    height: 85px;
    font-size: 28px;
  }
`;

export const Img = styled.img`
  position: absolute;
  overflow: hidden;
  ${layout}
  ${position}
`;

export const BkCoffeeLogo = styled(BkmLogo)`
  width: 22px;
  height: 31px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 35px;
    height: 50px;
  }
`;
