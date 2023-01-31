import styled from 'styled-components';

export const ExpressServicesTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};
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
  grid-template-columns: repeat(2, 150px);

  margin-bottom: 20px;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 35px;
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    flex-wrap: nowrap;
    gap: 15px;
    margin-bottom: 30px;
  }
`;

export const AdditionalInfo = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
  letter-spacing: 0.01em;

  color: #3d3d3d;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 20px;
    line-height: 1.2;
    width: 479px;
    margin: 0 auto;
  }
`;
