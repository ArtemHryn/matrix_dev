import styled from 'styled-components';

export const ServiceAndPriceTitle = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 48px;
  line-height: 1.88;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};

  margin-bottom: 24px;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
    line-height: 1.12;
    margin-bottom: 30px;
  }
`;

export const FourStagesTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};

  margin-bottom: 24px;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 36px;
    line-height: 1.2;

    margin-bottom: 30px;
  }
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 -14px 15px 0;
  }
`;

export const ServiceWarning = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  margin-bottom: 59px;

  color: ${p => p.theme.colors.third};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 17px;
    line-height: 1.24;
  }
`;

export const IndividualRequestTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.01em;

  margin-bottom: 20px;
  text-align: center;
  color: ${p => p.theme.colors.main};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {

  }
`;

export const ContactMeSocial = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  background-color: #9071af;
  border-radius: 50px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.03em;

  color: #ffffff;

  :first-child {
    margin-right: 8px;
  }
`;
