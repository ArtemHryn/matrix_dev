import styled from "styled-components";

export const CheckLabel = styled.label`
  border-radius: 6px;
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  box-shadow: rgba(139, 18, 113, 0.2) 0px 8px 24px;
  background-image: linear-gradient(45deg, #f3d5f7, #fbf6e7, #e6fcf5);
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  & input:checked ~ .checkmark:after {
    display: block;
  }
  & .checkmark:after {
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid #ca9ed5;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
    @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
      width: 0.3em;
      height: 0.6em;
    }
  }
`;

export const CheckMark = styled.div`
  border-radius: 6px;
  position: relative;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: linear-gradient(45deg, #f8e7fa, #fbf6e7, #e6fcf5);
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 24px;
    width: 24px;
  }
`;

export const LabelText = styled.p`
  color: #664982;
  font-size: 16px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 20px;
  }
`;
