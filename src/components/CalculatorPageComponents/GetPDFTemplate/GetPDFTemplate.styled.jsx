import styled from 'styled-components';

export const Img = styled.img`
  margin-bottom: 92px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 460px;
    margin: 0 auto 186px;
  }
`;

export const TemplateTitle = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 40px;
  line-height: 1.08;

  color: ${p => p.theme.colors.main};
  margin-bottom: 16px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 60px;
    margin-bottom: 37px;
  }
`;

export const HowToGetTemplate = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.22;

  color: #000000;
  max-width: 280px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 25px;
    line-height: 1.2;
    max-width: 90%;
  }
`;

export const InstaLink = styled.a`
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
`;
