import styled from 'styled-components';

export const Name = styled.span`
  font-family: 'Cormorant';
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.01em;

  margin-right: 11px;

  color: #72499b;
`;

export const RowList = styled.ul`
  display: flex;
`;

export const RowElement = styled.li`
  margin-right: 10px;

  :last-child {
    margin-right: 0;
  }
`;
