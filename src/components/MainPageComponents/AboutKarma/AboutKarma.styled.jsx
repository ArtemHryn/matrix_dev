import styled from 'styled-components';
import { space, position } from 'styled-system';
import circle from 'images/aboutImages/aboutCircle.png';

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 0.96;

  color: #9072af;
`;

export const TitleStarImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
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

  max-width: 195px;

  color: #494949;
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
`;

export const TextNearHands = styled.p`
position: relative;
  width: 200px;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #494949;
  z-index: 10;
`;

export const HandImg = styled.img`
  position: absolute;
  border-radius: 50%;
  ${position}
`;

export const UnderHandImg = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  backdrop-filter: blur(7px);

  ${position}
`;

export const TextUnderHandsContainer = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding: 31px 0;
  margin-bottom: 22px;

  color: #494949;

  background-image: linear-gradient(
    to right,
    #000 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 15px 2px;
  background-repeat: repeat-x;
`;

export const AboutResultText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;

  color: #9072af;
`;
