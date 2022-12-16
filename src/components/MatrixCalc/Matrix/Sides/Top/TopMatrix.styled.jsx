import styled from 'styled-components';

export const TopLayout = styled.div`
  position: absolute;
  top: 0%;
  right: 50%;

  transform: translate(50%, 9%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopElement = styled.span`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;

  margin-bottom: 11px;
  :last-child {
    margin-bottom: 12px;
  }
`;
