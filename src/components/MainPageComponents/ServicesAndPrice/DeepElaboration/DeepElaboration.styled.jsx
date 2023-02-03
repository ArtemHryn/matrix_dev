import styled from "styled-components";

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 -14px 15px 0;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin: 0 -30px 51px 0;
  }
`;
