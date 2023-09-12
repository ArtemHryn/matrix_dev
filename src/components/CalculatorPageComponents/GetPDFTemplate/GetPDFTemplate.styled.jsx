import styled from 'styled-components';

export const Img = styled.img`
  margin-bottom: 92px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 460px;
    margin: 0 auto 186px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 50%;
    flex-grow: 1;
    margin: 0 auto;
  }
`;

export const TemplateTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.08;
  max-width: 290px;
  margin-bottom: 16px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 60px;
    margin-bottom: 28px;
    max-width: 100%;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 40px;
    line-height: 1.08;
    margin-bottom: 22px;
  }
`;

export const HowToGetTemplate = styled.p`
  font-size: 18px;
  line-height: 1.22;
  font-weight: 600;
  max-width: 280px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 23px;
    line-height: 1.2;
    max-width: 70%;
  }
`;

export const InstaLink = styled.a`
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
  font-style: italic;
`;
