import styled from "styled-components";

export const RightLayout = styled.div`
  position: absolute;
  top: 50%;
  right: 0%;
  border-radius: 50%;
  transform: translate(-15%, -60%);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`;

export const RightElement = styled.span`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  margin-left: 15px;

  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  :not(:last-child) {
    margin-left: 19px;
  }
`;