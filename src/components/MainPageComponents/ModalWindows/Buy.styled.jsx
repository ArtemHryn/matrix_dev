import styled from "styled-components";

export const Price = styled.p`
  font-weight: 400;
  font-size: 30px;
  line-height: 1.2;

  color: ${p => p.theme.colors.secondText};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-right: 20px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 35px;
  }
`;

export const BuyButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.main};
  border-radius: 50px;
  width: 200px;
  height: 50px;

  font-weight: 300;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;

  color: ${p => p.theme.colors.white};
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 253px;
    height: 52px;
    font-size: 18px;
    line-height: 1.22;
  }
`;
