import styled from 'styled-components';

import { ReactComponent as Logo } from 'images/Calculator/Footer/DariLogo.svg';

export const DariLogoImg = styled(Logo)`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 150px;
    height: 150px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 200px;
    height: 200px;
  }
`;

export const DariLogo = styled.h2`
  position: relative;
  font-family: ${p => p.theme.fonts.title};
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 1.22;

  text-align: center;
  letter-spacing: 0.01em;

  padding-bottom: 15px;
  margin-bottom: 15px;
  //dots
  background-image: linear-gradient(
    to right,
    #9072af 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 15px 2px;
  background-repeat: repeat-x;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 55px;
  }
`;


export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  margin-bottom: 25px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    padding: 0 60px;
  }
`;

export const NavigationElement = styled.li``;

export const NavigationLink = styled.a`
  display: block;
  font-family: ${p => p.theme.fonts.button};
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.23;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  color: ${p => p.theme.colors.secondText};
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: ${p => p.theme.colors.main};
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 18px;
    line-height: 1.22;
  }
`;

export const PoliticList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    padding: 0 90px;
  }
`;

export const PoliticText = styled.p`
  font-family: ${p => p.theme.fonts.button};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  color: rgba(0, 0, 0, 0.5);
`;
