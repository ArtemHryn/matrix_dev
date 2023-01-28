import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
  max-width: 289px;
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.01em;
  margin-bottom: 35px;

  color: ${p => p.theme.colors.main};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
    line-height: 1.12;
    max-width: 660px;
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
    background-image: none
  }
`;

export const AboutCalculator = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 30px;

  color: ${p => p.theme.colors.secondText};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 22px;
    line-height: 1.23;
    margin-bottom: 141px;
  }
`;

export const LinkToCalculator = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 64px;

  background-color: ${p => p.theme.colors.main};
  border-radius: 50px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: 300;
  font-size: 18px;
  line-height: 1.22;
  letter-spacing: 0.03em;

  color: ${p => p.theme.colors.white};

  margin-bottom: 20px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 320px;
    margin-bottom: 11px;
  }
`;

export const Info = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.24;

  color: ${p => p.theme.colors.third};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 408px;
  }
`;
