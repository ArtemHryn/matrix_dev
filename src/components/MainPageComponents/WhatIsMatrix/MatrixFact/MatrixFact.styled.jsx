import styled from 'styled-components';

export const FactElement = styled.li`
  position: relative;
  width: 300px;
  padding: 45px 18px 45px 24px;
  margin-bottom: 15px;

  border: 1px solid #72499b;
  border-radius: 30px;
  overflow: hidden;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: calc((100% - 18px) / 3);
    margin-bottom: 0;
    margin-right: 9px;
    padding: 115px 18px 47px 20px;
  }
  :last-child {
    margin-bottom: 0;
    margin-right: 0px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    padding: 115px 28px 47px 28px;
  }
`;

export const FactTitleContainer = styled.div`
  background-image: linear-gradient(
    to right,
    #000 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 15px 2px;
  background-repeat: repeat-x;
`;

export const FactTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.2;

  letter-spacing: 0.01em;

  width: 50%;
  padding-bottom: 30px;

  color: #72499b;
  
`;

export const Img = styled.img`
  position: absolute;
  top: 0%;
  right: 0%;
`;

export const OneFact = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;

  color: ${p => p.theme.colors.third};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    padding-top: 32px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 20px;
    line-height: 1.2;
  }
`;
