import styled from 'styled-components';

export const Title = styled.h2`
  font-family: ${p => p.theme.main};
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 335px;
    font-size: 80px;
  }
`;



export const CheckBoxText = styled.p`
  max-width: 184px;

  font-family: ${p => p.theme.main};
  font-style: italic;
  font-weight: 400;
  font-size: 25px;
  line-height: 1.04;
  color: ${p => p.theme.colors.main};
  opacity: ${p => (p.op ? 0.3 : 1)};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 30px;
    line-height: 1;
  }
`;

//checkbox
export const Label = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
`;

export const Input = styled.input`
  appearance: none;
  &:checked + span {
    background-color: #9071af;
  }
  &:focus + span {
    box-shadow: 0 0 1px rgb(0, 221, 80);
  }
  &:checked + span:before {
    transform: translateX(1.5em);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(236, 236, 236, 0.83);
  transition: 0.4s;
  border-radius: 30px;
  ::before {
    position: absolute;
    content: '';
    height: 1.4em;
    width: 1.4em;
    border-radius: 50%;
    left: 0.3em;
    bottom: 0.3em;
    background-color: #fff;
    transition: 0.4s;
  }
`;
