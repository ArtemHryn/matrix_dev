import styled from 'styled-components';

export const Logo = styled.a`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 27px;

  letter-spacing: 0.01em;

  color: #9072af;
  margin-right: 74px;
`;

export const HeaderList = styled.ul`
  list-style: none;
  display: flex;
`;

export const HeaderListItem = styled.li`
  margin-right: 54px;
`;

export const HeaderLink = styled.a`
display: block;
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  padding: 20px 0;
  color: #717171;
  :last-child {
    margin-right: 0;
  }
`;
