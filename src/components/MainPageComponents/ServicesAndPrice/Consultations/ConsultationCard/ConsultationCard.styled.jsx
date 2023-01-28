import styled from 'styled-components';

export const ConcultationCardElement = styled.li`
  position: relative;

  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    :last-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;

export const ConcultationCardText = styled.p`
  position: absolute;
  bottom: 16px;
  right: 50%;
  transform: translateX(50%);
  width: 80%;

  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.18;
  text-align: center;

  color: ${p => p.theme.colors.main};

  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    li:last-child & {
      bottom: 50%;
      right: 25%;
      transform: translate(50%, 50%);
    }
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    bottom: 36px;
    font-size: 22px;
    line-height: 1.22;
  }
`;