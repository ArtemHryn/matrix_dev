import styled from 'styled-components';

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
  background-color: #9071af;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  &:is(:hover, :focus) {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 32px;
    height: 32px;
  }
`;

export const AddBtnText = styled.p`
  font-size: 15px;
  line-height: 18px;

  color: rgba(73, 73, 73, 0.8);
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 22px;
  }
`;