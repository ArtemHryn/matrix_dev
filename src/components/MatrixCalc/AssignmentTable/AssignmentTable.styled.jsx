import styled from 'styled-components';
import resultImg from '../../../images/resultAssign.png';

export const Title = styled.p`
  font-family: 'Cormorant';
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.01em;

  padding-bottom: 34px;
  padding-right: 20%;
  margin-bottom: 52px;

  color: #72499b;

  border-bottom: 2px dashed #422f56;
`;

export const Key = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #c0b8c9;
  border-radius: 50%;

  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;

  text-align: center;

  color: #000000;
  li:last-child & {
    border-color: #9071af;
  }
`;

export const FinalKey = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;

  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 32px;

  text-align: center;

  color: #000000;
  background-image: url(${resultImg});
  background-size: contain;

  margin-left: 8px;
  border-radius: 50%;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
`

export const AssignElement = styled.li`
margin-bottom: 10px;
:last-child {
  margin-bottom: 0;
}
`