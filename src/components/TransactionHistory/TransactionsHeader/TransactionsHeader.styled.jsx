import styled from 'styled-components';

export const Header = styled.th`
  padding: 10px;
  background-color: ${p => p.theme.colors.tableHeader};
  margin: 0;
  border-spacing: 0;
  color: white;
  border-right: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.primary};
  :last-child {
    border-right: ${p => p.theme.borders.none};
  }
`;

