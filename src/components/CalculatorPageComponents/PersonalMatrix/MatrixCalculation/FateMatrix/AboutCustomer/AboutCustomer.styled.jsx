import styled from 'styled-components';
import { space, typography } from 'styled-system';

export const NameDate = styled.p`
  font-family: ${p => p.theme.fonts.digits};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.21;
  text-align: center;

  color: #664982;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 35px;
    line-height: 1.2;
  }
  ${typography}
  ${space}
`;

export const Key = styled.p`
  font-family: ${p => p.theme.fonts.title};
  font-weight: 400;
  font-size: 19px;
  line-height: 1.5;

  color: #979797;
  ${space}

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 27px;
    line-height: 1.19;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 19px;

  }
  ${typography}
`;

export const Info = styled.span`
  font-family: ${p => p.theme.fonts.digits};
  font-weight: 400;
  font-size: 19px;
  line-height: 1.7;

  color: #373737;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 23px;
    line-height: 1.35;
  }
  ${typography}
`;

