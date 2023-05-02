import styled from 'styled-components';
import { layout, space } from 'styled-system';

export const MainTitle = styled.h3`
  font-weight: 400;
  font-size: 35px;
  line-height: 1.14;

  margin-bottom: 35px;

  color: ${p => p.theme.colors.main};
  ${layout}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 60px;
    line-height: 1.08;
    max-width: 600px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    max-width: 100%;
    margin-bottom: 50px;
  }
`;

export const Requests = styled.p`
  font-size: 20px;
  line-height: 1.2;

  margin-bottom: 15px;

  color: ${p => p.theme.colors.secondText};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 25px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.19;

  max-width: 320px;

  color: rgba(0, 0, 0, 0.8);
  ${space}
  ${layout}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 17px;
    line-height: 1.23;
    max-width: 620px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 18px;
  }
`;

export const Warning = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  color: ${p => p.theme.colors.main};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    
  }
`;

export const HowIsGoingConsultation = styled.h4`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;

  margin-bottom: 15px;

  color: ${p => p.theme.colors.secondText};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 25px;
  }
`;
