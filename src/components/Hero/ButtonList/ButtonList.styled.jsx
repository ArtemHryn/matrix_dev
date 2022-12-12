import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsListItem = styled.li`
  display: block;
  margin-bottom: 10px;
  padding: 8px;
`;


export const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 402px;
  height: 67px;

  background: #ffffff;
  box-shadow: 0px 5.48556px 9.1426px rgba(0, 0, 0, 0.25);
  border-radius: 12.7996px;

  
`;
