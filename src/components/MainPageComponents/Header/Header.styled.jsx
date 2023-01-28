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
  @media screen and (min-width: ${p => p.theme.sizes.tablet}){
    margin-right: 35px;
    :last-child{
      margin-right: 0;
    }
  }
`;

export const HeaderLink = styled.a`
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.secondText};
  padding: 20px 0;

`;
