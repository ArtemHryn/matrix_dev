import styled from "styled-components";

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};

  margin-bottom: 30px;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
    max-width: 600px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 90px;
    max-width: 1000px;
    margin-bottom: 124px;
  }
`;