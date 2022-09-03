import styled from "styled-components";

export const TableRow = styled.tr`
  background-color: ${p => {    
    return p.index % 2 !== 0
      ? p.theme.colors.tableColor1
      : p.theme.colors.tableColor2;
}};
`

export const TableEl = styled.td`
width: calc(100% / 3);
  text-align: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.monospace};
  border-right: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.primary};
  :last-child {
    border-right: ${p => p.theme.borders.none};
  }
`;

