import styled from "styled-components";

export const AuthorMasterClassTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.01em;

  margin-bottom: 33px;

  color: ${p => p.theme.colors.main};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
    width: 500px;
  }
`;

export const MasterClassList = styled.ul`
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    display: flex;
    justify-content: center;
  }
`;