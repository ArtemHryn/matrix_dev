import styled from 'styled-components';
import titleLine from 'images/WaysToTransformation/titleLine.png'

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 0.96;
  margin-bottom: 24px;

  color: #9072af;
  background-image: url(${titleLine});
  background-size: 315px;
  background-repeat: no-repeat;
  background-position: 0px 17px;
`;

export const About = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  margin-bottom: 35px;

  color: #000000;
`;

export const TransformationWarning = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: rgba(0, 0, 0, 0.6);
`;