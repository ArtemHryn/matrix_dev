import styled from 'styled-components';
import { color, shadow } from 'styled-system';

export const ModalContainer = styled.div`
  position: relative;
  top: 30px;
  max-width: ${p => p.theme.sizes.mobileModal};
  height: 100%;
  padding: 20px 30px 107px;
  background-color: rgba(245, 241, 255, 0.95);
  box-shadow: 0px 0px 30px rgba(190, 148, 232, 0.3);
  backdrop-filter: blur(15px);

  border-radius: 30px;

  overflow-y: auto;
  ${color}
  ${shadow}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    max-width: ${p => p.theme.sizes.tabletModal};
    padding-top: 64px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    max-width: ${p => p.theme.sizes.desktopModal};
    padding: 51px 80px 100px 120px;
    height: 90vh;
    transform: translateY(-5%);
  }
`;

export const Button = styled.button`
  display: block;

  margin: 0 auto 49px;
  background-color: transparent;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 62px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-bottom: 29px;
  }
`;