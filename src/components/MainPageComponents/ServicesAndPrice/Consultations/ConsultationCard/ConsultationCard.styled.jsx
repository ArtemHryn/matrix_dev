import styled from 'styled-components';

export const ConcultationCardElement = styled.li`
  position: relative;
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

  
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    bottom: 36px;
    font-size: 22px;
    line-height: 1.22;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    bottom: 36px;
    font-size: 30px;
    line-height: 1.22;
  }
`;

