import styled from 'styled-components';
import { ReactComponent as Matrix } from 'images/Calculator/personalMatrix/personalMatrix.svg';

export const PartnerMatrixImg = styled(Matrix)`
  width: 100%;
  height: auto;
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 660px;
  }

`;
