import styled from 'styled-components';

export const Title = styled.p`
  font-family: 'Cormorant';
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.01em;

  color: #72499b;
`;

export const List = styled.ul`
  display: flex;
`;
export const Element = styled.li`
  margin-right: 6px;
  :last-child {
    margin-right: 0;
  }
`;

export const Key = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  font-family: 'Cormorant';
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.01em;

  background: #ffffff;
  border: 1px solid #9071af;
  border-radius: 50%;
`;
