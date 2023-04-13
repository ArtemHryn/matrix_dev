import styled from 'styled-components';
import { ReactComponent as PeriodCircle } from 'images/Calculator/personalMatrix/periodCircle.svg';

export const AgeCircle = styled(PeriodCircle)`
  position: absolute;
  overflow: hidden;
  width: 103.5%;
  top: -3.1%;
  left: -1.7%;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 98%;
    top: -3.5%;
    left: 1%;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 52.1%;
    top: -3%;
    left: 7.2%;
  }
`;
