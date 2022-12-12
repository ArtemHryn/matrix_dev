import styled from 'styled-components';

export const Input = styled.input`
  width: 390px;
  height: 69px;
  padding: 20px 27px 20px 47px;
  margin-bottom: 17px;

  border: 1px solid #ddc5ff;
  border-radius: 15px;

  font-size: 24px;
  line-height: 29px;

  color: rgba(73, 73, 73, 0.8);
  :last-child {
    margin-bottom: 36px;
  }
`;

export const Date = styled.input`
  width: ${p => p.width};
  height: 38px;

  margin-right: 19px;

  border: 1px solid #ddc5ff;
  border-radius: 9px;

`;

export const ButtonCalc = styled.button`
  width: 390px;
  height: 69px;

  background: #9071af;
  box-shadow: 0px 5.1px 5.1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  font-family: 'Cormorant';
  font-size: 21.4431px;
  line-height: 26px;
  /* identical to box height */

  color: #ffffff;
  :hover {
    transform: scale(1.05) 
  }
`;