import styled from "styled-components";

export const TitleEl = styled.h3`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  text-align: center;
  text-transform: uppercase;
  border-bottom: ${p => p.theme.borders.normal};
`;