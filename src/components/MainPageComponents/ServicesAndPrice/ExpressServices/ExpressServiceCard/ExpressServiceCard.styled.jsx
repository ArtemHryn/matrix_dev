import styled from 'styled-components';

export const ExpressServiceCardElement = styled.li`
  position: relative;
  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    :last-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    
  }
`;

export const Img = styled.img`
  @media screen and (min-width: ${p=>p.theme.sizes.tablet}) and (max-width: ${p => p.theme.sizes.desktop}) {
    width: 234px;
    li:nth-last-child(-n + 2) & {
      width: 350px;
    }
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    flex-wrap: nowrap;
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
  font-size: 16px;
  line-height: 1.25;
  text-align: center;

  color: ${p => p.theme.colors.main};

  li:last-child & {
    transform: translate(-50%, 50%);
  }

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 25px;
    line-height: 1.2;
    li:last-child & {
      transform: translate(-50%, -50%);
    }
  }
`;
