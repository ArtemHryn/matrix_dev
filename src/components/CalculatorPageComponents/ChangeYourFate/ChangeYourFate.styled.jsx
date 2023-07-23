import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { typography } from 'styled-system';

export const Logo = styled.p`
  font-family: ${p => p.theme.fonts.title};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 0.66;
  letter-spacing: 0.01em;
  text-align: center;
  color: ${p => p.theme.colors.main};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    text-align: left;
    font-size: 22px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 24px;
    line-height: 0.8;
  }
`;

export const Line = styled.p`
  position: relative;
  padding: 0 20px;
  width: 90px;
  display: flex;
  justify-content: center;
  margin: 0 auto 21px;
  &::before {
    content: '';
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    border-top: 1px solid ${p => p.theme.colors.main};
    @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
      top: 65%;
    }
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin: 0 auto 21px 0;
    width: 115px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-bottom: 50px;
  }
`;

export const Karmolog = styled.span`
  font-family: ${p => p.theme.fonts.bona};
  font-style: normal;
  font-weight: 400;
  font-size: 6px;
  line-height: 0.66;
  letter-spacing: 0.07em;
  color: ${p => p.theme.colors.main};
  position: relative;
  z-index: 2;
  background-color: #eae5ff;
  padding: 0 5px;
  text-transform: uppercase;
  margin-top: 5px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    background-color: #f6f3fb;
    font-size: 8px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 8px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 1.08;

  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};
  margin-bottom: 16px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 80%;
    margin-bottom: 22px;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.21;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 40px;
    width: 100%;
  }
`;

export const AssistanseText = styled.p`
  font-size: 18px;
  line-height: 22px;

  color: ${p => p.theme.colors.main};
  margin-bottom: 35px;
  font-weight: 600;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 30px;
    font-size: 21px;
    max-width: 95%;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 23px;
    margin-bottom: 39px;
    max-width: 400px;
  }
`;

export const ConsultationBtn = styled(Link)`
  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;
  font-family: ${p => p.theme.fonts.button};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.main};
  width: 100%;
  height: 50px;
  text-transform: uppercase;
  border-radius: 8px;

  color: ${p => p.theme.colors.white};
  transition: all 250ms ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    width: 336px;
    height: 56px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 409px;
    height: 60px;
  }
`;

export const Image = styled.img`
  width: 326px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 405px;
    margin-right: auto;
    object-fit: contain;
    object-position: 130%;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 100%;
    height: 441px;
  }
`;

export const CalcAuthor = styled.p`
  text-align: center;
  letter-spacing: 0.01em;
  font-size: 20px;
  line-height: 1.2;

  color: ${p => p.theme.colors.main};
  ${typography}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 22px;
    line-height: 1.23;
    width: 500px;
    margin: 0 auto;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 100%;
  }
`;
