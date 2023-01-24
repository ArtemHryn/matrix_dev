import styled from 'styled-components';

export const ConcultationCardElement = styled.li`
position: relative;
  :last-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export const ConcultationCardText = styled.p`
  position: absolute;
  bottom: 16px;
  right: 50%;
  transform: translateX(50%);
  width: 80%;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #9072af;
  li:last-child & {
    bottom: 50%;
    right: 25%;
    transform: translate(50%, 50%);
  }
`;