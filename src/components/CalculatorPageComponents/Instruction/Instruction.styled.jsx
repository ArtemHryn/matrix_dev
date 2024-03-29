import styled, { keyframes } from 'styled-components';
import { textAlign, position, layout, border } from 'styled-system';

const buttonAnimation = keyframes`
  0% {
    rotate: 0deg
  }
  50% {
    rotate: 360deg;
  }
  100% {
    rotate: 0deg
  }`;

const imgPhonesAnimation = keyframes`
  0%{
    transform: translateY(0px)
  }
  50% {
    transform: translateY(30px)
  }
    100% {
    transform: translateY(0px)
  }
`;

export const Title = styled.h1`
  font-size: 46px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.01em;
  text-wrap: balance;
  & > span {
    font-family: ${p => p.theme.fonts.title};
    color: #592e85;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 102px;
    line-height: 0.9;
    letter-spacing: 0.01em;
    text-wrap: balance;
    margin-bottom: 7px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    text-align: center;
    font-size: 80px;
    font-weight: 400;
    line-height: 0.78;
    margin-bottom: 55px;
  }
`;

export const Img = styled.img`
  position: absolute;
  width: 210px;
  height: auto;
  z-index: 0;
  ${position}
  animation: ${imgPhonesAnimation} 10s ease infinite;
  animation-delay: ${p => p.delay};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 380px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 430px;
  }
  ${layout}
`;

export const OpenModalBtn = styled.button`
  width: 60px;
  height: 60px;
  background-color: transparent;

  transition: scale 350ms ease;
  &:hover,
  &:focus {
    scale: 1.05;
    animation: ${buttonAnimation} 10s ease infinite;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 98px;
    height: 98px;
  }
`;

export const UnderBtnText = styled.p`
  color: #592e85;
  font-family: Cormorant;
  font-size: 20px;
  font-style: italic;
  font-weight: 500;
  line-height: 0.8;
  letter-spacing: 0.01em;
  max-width: 187px;
  text-wrap: balance;
  ${textAlign}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 28px;
    letter-spacing: 0.02em;
    max-width: 311px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 38px;
    max-width: 410px;
  }
`;

export const OpenInstructionModalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  height: 48px;

  background-color: #fff;
  border-radius: 8px;

  color: #9071af;
  font-family: Cormorant;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  ${border}
  transition: scale 350ms ease;
  &:hover,
  &:focus {
    scale: 1.05;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    gap: 12px;
    height: 78px;

    font-size: 23px;
    letter-spacing: 0.04em;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 100%;
    height: 60px;
    font-size: 19px;
  }
`;
