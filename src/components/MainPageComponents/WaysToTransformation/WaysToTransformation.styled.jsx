import styled from 'styled-components';
import titleLine from 'images/WaysToTransformation/titleLine.png'

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 48px;
  line-height: 0.96;
  margin-bottom: 24px;

  color: ${p => p.theme.colors.main};
  background-image: url(${titleLine});
  background-size: 315px;
  background-repeat: no-repeat;
  background-position: 0px 17px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    background-image: none;

    font-size: 76px;
    line-height: 1;
    letter-spacing: 0.01em;
  }
`;

export const About = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  margin-bottom: 35px;

  color: ${p => p.theme.colors.secondTitle};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 466px;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const TransformationWarning = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: rgba(0, 0, 0, 0.6);
`;