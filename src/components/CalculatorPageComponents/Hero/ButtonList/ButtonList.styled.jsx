import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Lock } from 'images/Calculator/Hero/lock.svg';

export const ButtonsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-bottom: 45px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 80px;
    gap: 28px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-bottom: 41px;
  }
`;

export const ButtonsListItem = styled.li``;

export const Button = styled(NavLink)`
  position: relative;
  width: 326px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${p => p.theme.fonts.button};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.01em;

  color: #9072af;
  background-color: #ffffff;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  &.active {
    background: #9071af;
    color: #ffffff;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 482px;
    height: 74px;
    border-radius: 15px;
    font-size: 24px;
    line-height: 1.21;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    height: 64px;
    width: 440px;
    font-size: 24px;
    line-height: 1.21;
  }
`;

export const LockInButton = styled(Lock)`
  position: absolute;
  right: 20px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 32px;
    height: 32px;
  }
`;
