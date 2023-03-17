import styled from 'styled-components';
import { space, position, layout, flexbox } from 'styled-system';
import circle from 'images/aboutImages/aboutCircle.png';
import handsContainerImg from 'images/aboutImages/handsLine.png';

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 48px;
  line-height: 0.96;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 90px;
    line-height: 1;
    max-width: 725px;
  }
`;

export const TitleStarImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 45px;
    top: 25%;
    right: 10%;
  }
`;

export const AboutReasonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 804px;
  width: 300px;
  height: 74px;
  ${space}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 380px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 568px;
    ${flexbox}
  }
`;

export const CrystalContainer = styled.div`
  width: 56px;
  height: 56px;
  position: relative;
  background-color: #f5f1ff;
  border-radius: 50%;
  ${space}
`;
export const CrystalImg = styled.img`
  position: absolute;
  bottom: 3%;
  transform: translate(-50%, 0%);
  ${position}
`;

export const AboutDesc = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  max-width: 178px;

  color: ${p => p.theme.colors.third};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 16px;
    line-height: 1.24;
    max-width: 240px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    max-width: 100%;
    text-align: center;
  }
`;

export const HandsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${circle});
  background-repeat: no-repeat;
  width: 100%;
  height: 386px;
  margin-bottom: 36px;
  background-size: 96%;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    align-items: flex-start;
    justify-content: flex-end;
    background-image: url(${handsContainerImg});
    background-size: cover;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    align-items: flex-end;
    background-image: none;
  }
`;

export const TextNearHands = styled.p`
  position: relative;
  max-width: 200px;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: ${p => p.theme.colors.third};
  z-index: 10;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    max-width: 335px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    max-width: 435px;
    font-size: 22px;
    line-height: 1.22;
    max-width: 435px;
    margin-top: 25px;
  }
`;

export const HandImg = styled.img`
  position: absolute;
  border-radius: 50%;
  ${position}
  &.animate__fadeInDown {
    animation-name: fadeInDown;
    animation-duration: 1.5s;
  }

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    ${layout}
  }
`;

export const UnderHandImg = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  backdrop-filter: blur(7px);
  ${position}
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 120px;
    height: 120px;
  }
`;


export const TextUnderContainer = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.22;
  padding: 31px 0;
  margin-bottom: 22px;

  color: ${p => p.theme.colors.third};

  background-image: linear-gradient(
    to right,
    #000 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 15px 2px;
  background-repeat: repeat-x;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 20px;
    line-height: 1.2;
    max-width: 435px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-left: auto;
    padding-top: 0;

    font-size: 22px;
    line-height: 1.22;
  }
`;

export const AboutResultText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.2;

  color: ${p => p.theme.colors.main};
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-left: auto;
    max-width: 435px;
  }
`;
