import styled from 'styled-components';

export const Logo = styled.a`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 38px;
  line-height: 27px;

  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};
  margin-right: 74px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    display: none;
  }
`;

export const HeaderList = styled.ul`
  list-style: none;
  display: flex;
`;

export const HeaderListItem = styled.li`
  margin-right: 54px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-right: 35px;
    :last-child {
      margin-right: 0;
    }
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-right: 43px;
  }
`;

export const HeaderLink = styled.a`
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.22;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.secondText};
  padding: 16px 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: scale(1.1);
    color: ${p => p.theme.colors.main};
  }
  :focus {
    outline: 1px solid ${p => p.theme.colors.main};
    border-radius: 5px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 20px;
    padding: 26px 0;
    margin: 6px 0;
  }
`;
