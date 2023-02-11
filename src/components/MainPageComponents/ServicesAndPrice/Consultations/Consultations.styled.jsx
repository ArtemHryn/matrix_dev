import styled from 'styled-components';
import { golderBorder } from '.';

export const ConsultationsTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 30px;
  line-height: 1;
  letter-spacing: 0.01em;

  margin-bottom: 8px;

  color: ${p => p.theme.colors.main};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 40px;
    line-height: 1.2;
    margin-bottom: 0;
    margin-bottom: 27px;
  }
`;

export const ConsultationsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 150px);

  margin-bottom: 30px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    grid-template-columns: repeat(3, calc(100% / 3));
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    grid-template-columns: repeat(4, 310px);
    justify-content: center;
  }
`;

export const IndividualRequestElement = styled.li`
  padding: 42px 19px;
  grid-column: 1 /3;

  border: 2px solid #72499b;
  border-radius: 16px;
  border-image: url(${golderBorder});
  border-image-slice: 20 20 20 20;
  border-image-width: 15px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    padding: 67px 35px 57px;
    grid-column: 2 /4;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    padding: 95px 35px 79px;
    grid-column: 3 /5;
  }
`;

export const IndividualRequestTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.01em;

  margin-bottom: 20px;
  text-align: center;
  color: ${p => p.theme.colors.main};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 22px;
    line-height: 1.2;
    margin-bottom: 45px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 28px;
    margin: 0 auto 51px;
  }
`;

export const ContactMeSocial = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 26px;
  background-color: #9071af;
  border-radius: 50px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 1.1;
  letter-spacing: 0.03em;

  color: #ffffff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :first-child {
    margin-right: 8px;
  }
  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 190px;
    height: 46px;
    font-size: 16px;
    line-height: 1.19;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 24px;
    line-height: 1.2;
    width: 270px;
    height: 64px;
  }
`;
