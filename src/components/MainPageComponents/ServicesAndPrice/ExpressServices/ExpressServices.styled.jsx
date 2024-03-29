import styled from 'styled-components';

export const ExpressServicesTitle = styled.h3`
  font-weight: 400;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: 0.01em;

  margin-bottom: 20px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 23px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 40px;
    margin-bottom: 36px;
  }
`;

export const ExpressServicesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  margin-bottom: 20px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 35px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    gap: 15px;
    margin-bottom: 30px;
    grid-template-columns: repeat(4, minmax(150px, 1fr));
  }
`;

export const AdditionalInfo = styled.p`
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
  letter-spacing: 0.01em;

  color: #3d3d3d;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 20px;
    line-height: 1.2;
    margin: 0 auto;
  }
`;

export const LinkToCert = styled.a`
  text-decoration: underline;
  color: #be94e8;
`;
