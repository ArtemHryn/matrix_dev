import styled from 'styled-components';

export const Title = styled.h1`
  color: ${p => p.theme.colors.main};
  text-align: center;
  font-family: ${p => p.theme.fonts.title};
  font-size: 20px;
  font-weight: 400;
  line-height: 1;

  margin-bottom: 16px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 28px;
    line-height: 1.4;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
  }
`;
