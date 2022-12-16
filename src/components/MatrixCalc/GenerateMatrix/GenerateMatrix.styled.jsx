import styled from 'styled-components';

export const Form = styled.form`
  width: 299px;
  height: 304px;
  padding: 52px 56px;

  background: #ffffff;
  border-radius: 29px;
`;

export const Button = styled.button`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-align: left;

  color: #ffffff;
  padding: 18px 16px;
  margin-bottom: 9px;

  background: #9071af;
  box-shadow: 0px 4.08056px 4.08056px rgba(0, 0, 0, 0.25);
  border-radius: 12.2417px;
`;

export const CodeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const CodeItem = styled.li`
  margin-right: 5px;
  margin-bottom: 5px;
  :nth-child(3n) {
    margin-right: 0;
  }
  :nth-child(n + 6) {
    margin-bottom: 0;
  }
`;
