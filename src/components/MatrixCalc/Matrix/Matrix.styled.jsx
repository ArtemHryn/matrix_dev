import styled from 'styled-components';
import {
  // color,
  // space,
  // layout,
  // typography,
  // flexbox,
  // border,
  position,
  // background,
} from 'styled-system';

export const Img = styled.img`

`;

export const MatrixKey = styled.span`
  position: absolute;
  top: ${p => p.y};
  left: ${p => p.x};
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: ${p => (p.fontSize ? p.fontSize : '23px')};
  line-height: 35px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #000000;
  ${position}
`;
