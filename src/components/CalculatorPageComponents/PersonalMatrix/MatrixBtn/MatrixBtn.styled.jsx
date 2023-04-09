import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 46px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 21px;
    margin-bottom: 29px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    gap: 24px;
    margin-bottom: 64px;
  }
`;

export const BtnItem = styled.li`
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: calc((100% - 21px) / 2);
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: calc((100% - 24px * 3) / 4);
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  background: ${p => p.theme.colors.white};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  text-transform: uppercase;

  color: ${p => p.theme.colors.text};
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &.active {
    background-color: ${p => p.theme.colors.main};
    box-shadow: inset 0px 26px 43px rgba(0, 0, 0, 0.25);
    color: ${p => p.theme.colors.white};
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 46px;
  }
`;
