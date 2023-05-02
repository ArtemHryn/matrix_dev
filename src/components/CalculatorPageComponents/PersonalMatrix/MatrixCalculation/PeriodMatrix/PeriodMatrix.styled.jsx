import styled from 'styled-components';
import { border, color, flexbox, layout, position } from 'styled-system';
import { ReactComponent as PeriodCircle } from 'images/Calculator/personalMatrix/periodCircle.svg';
import { HiArrowLeft } from 'react-icons/hi';

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

export const AgeArcane = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${p => p.theme.fonts.digits};
  font-weight: 400;
  font-size: 7px;
  line-height: 1.5;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 11px;
  }
  ${position}
  ${layout}
`;

export const ChangePageBtn = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.4px solid #9072af;
  background-color: #fff;
  border-radius: 50%;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 36px;
    height: 36px;
  }
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
export const Arrow = styled(HiArrowLeft)`
  color: #9071af;
  transform: rotate(${p => p.rotate || '0deg'});
`;

export const AgeColumnName = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  border-right: 0.6px solid #9071af;
  height: 100%;
  ${flexbox};
  ${border}
`;

export const AgeColumnNameText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.01em;

  color: #72499b;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 26px;
  }
`;

export const AgeColumnList = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const AgeColumnItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${color}
  &.active {
    background-color: rgb(114 73 155 / 46%);
  }
`;

export const AgeElement = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
  height: 30px;
  border-bottom: 0.6px solid #9071af;
  border-right: 0.6px solid #9071af;

  font-family: ${p => p.theme.fonts.digits};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 0.7;

  letter-spacing: 0.01em;

  color: #540072;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 21px;
    height: 50px;
  }
  ${flexbox}
  ${border}
`;

export const TableHeader = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.65;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;

  color: #72499b;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 24px;
  }
`;
