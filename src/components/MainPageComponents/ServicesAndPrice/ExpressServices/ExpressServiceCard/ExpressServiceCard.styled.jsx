import styled from 'styled-components';

export const ExpressServiceCardElement = styled.li`
  position: relative;
  :last-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
export const ExpressServiceCardText = styled.p`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16.5198px;
  line-height: 20px;
  text-align: center;

  color: #9072af;
  li:last-child & {
    transform: translate(-50%, 50%);
  }
`;