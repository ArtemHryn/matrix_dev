import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 53px;
  font-size: 90px;
  line-height: 100%;

  text-align: center;
  letter-spacing: 0.01em;

  color: #9072af;
`;

export const ContactList = styled.ul`
  display: flex;
`;

export const ContactEl = styled.li`
  display: flex;
  width: 230px;
  flex-direction: column;
  justify-content: center;
  margin-right: 190px;
  :last-child {
    margin-right: 0;
  }
`;
