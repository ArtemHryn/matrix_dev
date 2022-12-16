import styled from 'styled-components';

export const BottomLayout = styled.div`
  position: absolute;
  top: 100%;
  right: 50%;
  transform: translate(47%, -119%);
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
`;

export const BottomElement = styled.span`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  :not(:first-child) {
    margin-bottom: 11px;
  }

  color: #000000;
`;
