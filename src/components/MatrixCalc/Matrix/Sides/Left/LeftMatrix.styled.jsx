import styled from "styled-components";

export const LeftLayout = styled.div`
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translate(116%, -60%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftElement = styled.span`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  margin-left: 20px;
  :first-child {
    margin-left: 0;
  }
`;