import styled from 'styled-components';

export const FooterLogo = styled.img`
  width: 110px;
  margin: 0 auto;
`;

export const FooterTitle = styled.h2`
  font-family: ${p => p.theme.title};
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 61px;
  letter-spacing: 0.01em;
  text-align: center;

  color: #9072af;

  margin-bottom: 30px;
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 42px;
  margin-right: -22px;
`;

export const NavigationElement = styled.li`
  margin-bottom: 6px;
  margin-right: 22px;
`;

export const NavigationLink = styled.a`
  display: block;
  width: 144px;

  font-family: ${p => p.theme.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;

  color: #000000;
`;

export const PoliticsAndDesign = styled.p`
  font-family: ${p => p.theme.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;

  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 5px;
  :last-child {
    margin-bottom: 0;
  }
`;
