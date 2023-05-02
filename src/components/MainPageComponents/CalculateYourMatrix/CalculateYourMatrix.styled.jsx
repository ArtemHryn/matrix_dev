import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { space, typography } from 'styled-system';

export const Title = styled.h2`
  max-width: 289px;
  font-style: italic;
  font-weight: 400;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.01em;
  margin-bottom: 35px;

  color: ${p => p.theme.colors.main};
  ${typography}
  ${space}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
    line-height: 1.12;
    max-width: 660px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 90px;
    line-height: 1;
    margin-bottom: 40px;
    max-width: 100%;
    width: 650px;
  }
`;

export const TitleAdditional = styled.span`
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};
  ${typography}
  ${space}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
    line-height: 1.12;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 90px;
    line-height: 1;
  }
`;

export const ImgPhones = styled.img`
  transform: scale(1.2);
  background-image: radial-gradient(
    circle,
    rgba(236, 229, 255, 0.72) 44%,
    rgba(255, 255, 255, 0.58) 69%
  );
  margin-bottom: 35px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    transform: scale(1.18);
    background-image: none;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    display: none;
  }
`;

export const AboutCalculator = styled.p`
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 30px;

  color: ${p => p.theme.colors.secondText};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 22px;
    line-height: 1.23;
    margin-bottom: 66px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-bottom: 100px;
  }
`;

export const LinkToCalculator = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 54px;

  background-color: ${p => p.theme.colors.main};
  border-radius: 50px;

  font-weight: 300;
  font-size: 18px;
  line-height: 1.22;
  letter-spacing: 0.03em;

  color: ${p => p.theme.colors.white};

  margin-bottom: 20px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 320px;
    margin-bottom: 66px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 20px;
  }
`;

export const Info = styled.p`
  font-size: 17px;
  line-height: 1.24;

  color: ${p => p.theme.colors.third};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 408px;
  }
`;

export const DescTopImg = styled.img`
  display: none;
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    display: block;
    width: 600px;
  }
`;
