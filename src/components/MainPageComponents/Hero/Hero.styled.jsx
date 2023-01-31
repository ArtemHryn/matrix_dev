import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const ProjectText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 300;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.secondText};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 20px;
    line-height: 1.2;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.title};
  font-weight: 400;
  font-size: 64px;
  line-height: 1.71;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 120px;
    line-height: 1;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 100px;
    line-height: 1.2;
    margin-bottom: 12px;
  }
`;

export const MoveText = styled.p`
  max-width: 302px;
  font-family: ${p => p.theme.main};
  font-style: italic;
  font-weight: 400;
  font-size: 25px;
  line-height: 1.2;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.motivationText};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    max-width: 419px;
    font-size: 35px;
  }
`;

export const Image = styled.img`
  width: 100vh;
  margin: 0 auto;
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    display: none;
  }
`;

export const ServicesLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 64px;
  margin: 0 auto 10px;

  background: ${p => p.theme.colors.main};
  border-radius: 50px;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.22;
  letter-spacing: 0.03em;

  color: ${p => p.theme.colors.white};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 380px;
    margin: 0 7px 0 0;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 288px;
  }
`;

export const MatrxiLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 64px;
  margin: 0 auto;

  border: 1px solid ${p => p.theme.colors.main};
  border-radius: 80px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.22;

  letter-spacing: 0.03em;

  color: ${p => p.theme.colors.main};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 380px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 288px;
  }
`;

export const ImgStar = styled.img`
  position: absolute;
  width: 24px;
  left: 29%;
`