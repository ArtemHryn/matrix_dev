import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 100%;
  background: ${p => p.theme.colors.white};
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
    color: ${p => p.theme.colors.white};
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }
  &:disabled {
    opacity: 0.5;
  }
  &:disabled:hover {
    transform: none;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 46px;
  }
`;
