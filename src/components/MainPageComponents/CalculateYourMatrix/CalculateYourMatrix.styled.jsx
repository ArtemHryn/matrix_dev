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

  color: #9072af;
`;

export const ImgPhones = styled.img`
  transform: scale(1.2);
  background-image: radial-gradient(
    circle,
    rgba(236, 229, 255, 0.72) 44%,
    rgba(255, 255, 255, 0.58) 69%
  );
  margin-bottom: 35px;
`;

export const AboutCalculator = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 30px;

  color: #000000;
`;

export const LinkToCalculator = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 64px;

  background-color: #9071af;
  border-radius: 50px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.03em;

  color: #ffffff;

  margin-bottom: 20px;
`;

export const Info = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;

  color: #494949;
`;
