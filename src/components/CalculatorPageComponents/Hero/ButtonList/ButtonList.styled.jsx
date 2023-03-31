import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Lock } from 'images/Calculator/Hero/lock.svg';


export const ButtonsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-bottom: 45px;
`;

export const ButtonsListItem = styled.li`

`;

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
  line-height: 19px;
  letter-spacing: 0.01em;

  color: #9072af;
  background-color: #ffffff;
  box-shadow: 0px 4.01496px 6.69159px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const LockInButton = styled(Lock)`
   position: absolute;
   right: 20px;
`
