import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 400;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.01em;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
    margin-bottom: 10px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 90px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    display: flex;
    flex-wrap: wrap;
  }
`;