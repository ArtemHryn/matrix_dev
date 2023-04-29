import styled from 'styled-components';
import { layout } from 'styled-system';

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.5);
  border: 0.8px solid rgba(221, 197, 255, 0.6);
  border-radius: 8px;
  font-family: 'Cormorant';
  font-size: 18px;
  line-height: 22px;
  padding: 11px;
  color: rgba(38, 38, 38, 0.9);
  width: 110px;
  ${layout}
`;

export const RemoveBtn = styled.button`
  border-radius: 50%;
  background-color: #e192c1;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:is(:hover, :focus) {
    transform: scale(1.05);
  }
`;
