import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const ProjectText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.secondText};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 20px;
    line-height: 24px;
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
`;

export const MoveText = styled.p`
  max-width: 302px;
  font-family: ${p => p.theme.main};
  font-style: italic;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.motivationText};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    max-width: 419px;
    font-size: 35px;
    line-height: 42px;
  }
`;

export const Image = styled.img`
  width: 100vh;
  margin: 0 auto;
`;

export const ServicesLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 64px;
  margin: 0 auto 10px;

  background: #9071af;
  border-radius: 50px;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.03em;

  color: ${p => p.theme.colors.white};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 380px;
    margin: 0 7px 0 0;
  }
`;

export const MatrxiLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 64px;
  margin: 0 auto;

  border: 1px solid #9071af;
  border-radius: 80px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;

  letter-spacing: 0.03em;

  color: ${p => p.theme.colors.main};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 380px;
  }
`;
