import styled from 'styled-components';
import { layout, space } from 'styled-system';

export const MainTitle = styled.h3`
  font-weight: 400;
  font-size: 35px;
  line-height: 1.14;

  margin-bottom: 25px;
  ${layout}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 60px;
    line-height: 1.08;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
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

export const AdditionalInfo = styled.p`
  font-weight: 300;
  font-size: 13px;
  line-height: 1.23;
  letter-spacing: 0.03em;

  color: rgba(0, 0, 0, 0.8);
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    max-width: 400px;
  }
`;

export const Price = styled.p`
  font-size: 30px;
  line-height: 1.2;

  color: ${p => p.theme.colors.secondText};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-right: 20px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 35px;
  }
`;

export const BuyButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.main};
  border-radius: 50px;
  width: 200px;
  height: 50px;

  font-weight: 300;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;

  color: ${p => p.theme.colors.white};
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 253px;
    height: 52px;
    font-size: 18px;
    line-height: 1.22;
  }
`;
