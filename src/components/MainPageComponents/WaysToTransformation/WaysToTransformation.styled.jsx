import styled from 'styled-components';
import titleLine from 'images/WaysToTransformation/titleLine.png';

export const Title = styled.h2`
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

  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 90px;
    margin-bottom: 41px;
  }
`;

export const About = styled.p`
  font-size: 18px;
  line-height: 1.22;

  margin-bottom: 35px;

  color: ${p => p.theme.colors.secondTitle};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 466px;
    font-size: 20px;
    line-height: 1.2;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 290px;
    margin: 0 auto 41px;
  }
`;

export const TransformationWarning = styled.p`
  font-size: 16px;
  line-height: 1.18;

  color: rgba(0, 0, 0, 0.6);
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 20px;
    line-height: 1.2;
    width: 1070px;
  }
`;
