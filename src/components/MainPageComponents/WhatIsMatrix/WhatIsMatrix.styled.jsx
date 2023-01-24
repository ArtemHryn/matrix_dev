import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 47px;
  line-height: 1.02;
  margin-bottom: 20px;

  color: #9072af;
`;

export const MatrixCreator = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #494949;
  margin-bottom: 12px;
`;

export const AboutMethod = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
  margin-bottom: 35px;

  color: #494949;
`;

export const StarLineImg = styled.img`
  margin-bottom: 12px;
`;

export const MethodList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const LinkToCalculator = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 64px;
  padding: 0 51px;

  background-color: #9071af;
  border-radius: 50px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.03em;

  color: #ffffff;
`;
