import styled from 'styled-components';

export const FooterTitle = styled.h2`
  font-family: 'Cormorant SC';
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 1.22;
  letter-spacing: 0.01em;
  text-align: center;

  color: ${p => p.theme.colors.main};

  margin-bottom: 30px;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    text-align: left;
    font-size: 54px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 70px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 42px;
  margin-right: -22px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 0;
  }
`;

export const NavigationElement = styled.li`
  margin-bottom: 6px;
  margin-right: 7px;
`;

export const NavigationLink = styled.a`
  @media screen and (max-width: ${p => p.theme.sizes.mobile}) {
    width: 32vw;
    font-size: 14px;
  }
  display: block;
  width: 140px;

  font-family: ${p => p.theme.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.22;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.secondText};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  :hover,
  :focus {
    transform: scale(1.1);
    color: ${p => p.theme.colors.main};
  }

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 200px;
    font-size: 18px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 30px;
    width: 320px;
  }
`;

export const PoliticsAndDesign = styled.p`
  font-family: ${p => p.theme.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;

  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 5px;
  :last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 230px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 30px;
    text-align: left;
    width: 400px;
    :first-child {
      margin-bottom: 20px;
    }
  }
`;
