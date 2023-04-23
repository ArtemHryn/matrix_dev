import styled from 'styled-components';
import { color, space, typography } from 'styled-system';

export const MatrixNumber = styled.p`
  font-family: 'Cardo';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;

  text-align: center;

  color: #664982;
  margin-bottom: 10px;
  ${space}
`;

export const StarImg = styled.img`
  position: absolute;
  width: 48px;
  top: 0%;
  left: 10px;
`;

export const NameDate = styled.p`
  font-family: 'Cardo';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 29px;
  text-align: center;

  color: #664982;

  ${space}
  ${typography}
`;

export const Age = styled.p`
  font-family: 'Cormorant SC';
  font-weight: 400;
  font-size: 19px;
  line-height: 1.54;

  color: #979797;
  ${color}
`;
