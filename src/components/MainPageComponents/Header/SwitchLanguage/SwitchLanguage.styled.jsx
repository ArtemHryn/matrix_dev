import styled from "styled-components";

export const SwitchButton = styled.div`
  /* background: rgba(255, 255, 255, 0.56); */
  border-radius: 30px;
  overflow: hidden;
  width: 100px;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1px;
  color: #155fff;
  position: relative;
  padding-right: 50px;
  position: relative;
  margin-left: 20px;

  &:before {
    content: 'RU';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    pointer-events: none;
  }

  & input {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;

    &:checked + label:before {
      transform: translateX(50px);
      transition: transform 300ms linear;
    }

    & + label {
      position: relative;
      padding: 5px 0;
      display: block;
      user-select: none;
      pointer-events: none;

      &:before {
        content: '';
        background: #fff;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 30px;
        transform: translateX(0);
        transition: transform 300ms;
      }

      span {
        position: relative;
      }
    }
  }
`;
