import styled from 'styled-components';

export const AdvertisingContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: auto;
  border-radius: 4px;
  transform: translateX(${props => (props.$visible ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  background: linear-gradient(47deg, #f9f7fe 0%, #fdf6fb 100%);
  z-index: 9999;
`;

export const CloseBtn = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000;
  svg {
    width: 22px;
    height: 22px;
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 33vw;
  max-width: 200px;
  height: auto;
`;

export const MatrixIgm = styled.img`
  position: absolute;
  display: none;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    display: block;
    right: -10%;
    top: 3%;
    width: 30vw;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: auto;
  width: 72vw;
  padding: 28px 15px 22px 78px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 65vw;
    margin: 0 auto;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin: 0 auto;
  }
`;

export const MiniCourse = styled.p`
  font-size: clamp(12px, 2.5vw, 24px);
  font-weight: 500;
  color: #9071af;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: clamp(36px, 6vw, 72px);
  line-height: 92%;
  letter-spacing: -0.04em;
  text-align: center;
  background: linear-gradient(
    180deg,
    #c384e5 0%,
    #b678db 23.23%,
    #733caa 56.56%,
    #c979b7 76.35%,
    #dc87ba 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;

export const Psychology = styled.p`
  font-style: italic;
  font-weight: 700;
  font-size: clamp(12px, 2vw, 20px);
  line-height: 114%;
  letter-spacing: 0.01em;
  text-align: center;
  color: #9072af;
  margin-bottom: 10px;
`;

export const GetInfo = styled.p`
  font-size: clamp(12px, 2vw, 28px);
  font-weight: 500;
  line-height: 114%;
  letter-spacing: 0.01em;
  text-align: center;
  color: #9072af;
  text-wrap: balance;
`;

export const BottomWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 85px;
  background: linear-gradient(47deg, #c4bae9 0%, #c6a1ce 100%);
  padding-right: 10vw;
  z-index: 100;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    justify-content: center;
    padding-right: 0;
  }
`;

export const LinkToCourse = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  color: #9071af;
  background-color: #fff;
  width: 280px;
  height: 44px;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  gap: 32px;
  padding-right: 20px;
  text-transform: uppercase;
  &:hover {
    background-color: #805ea0;
  }
  svg {
    width: 8px;
    height: 8px;
  }
`;
