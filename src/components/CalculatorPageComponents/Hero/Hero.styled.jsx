import styled from 'styled-components';
import { position, layout } from 'styled-system';

export const Img = styled.img`
  position: absolute;
  ${position}
  ${layout}
`;

export const Logo = styled.p`
  font-family: ${p => p.theme.fonts.title};
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 0.66;
  text-align: center;

  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};
  margin-bottom: 45px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 40px;
  }
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 55px;
  line-height: 1;

  text-align: center;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};
  margin-bottom: 35px;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 100px;
  }
`;

export const SecondTitle = styled.span`
  font-style: italic;
`;

export const AboutCalc = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.24;
  text-align: center;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};
  margin-bottom: 53px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 28px;
    line-height: 1.22;

    width: 480px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Authoring = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
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
    width: 400px;
  }
`;
