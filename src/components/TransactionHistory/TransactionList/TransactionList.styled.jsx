import styled from "styled-components";

export const Table = styled.table`
  border-spacing: 0;
  width: ${p => p.theme.sizes.tableWidth};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;