import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 47px;
  line-height: 1.02;
  margin-bottom: 20px;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
    max-width: 70vw;
    margin-bottom: 30px;
  }
`;

export const MatrixCreator = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: ${p => p.theme.colors.third};
  margin-bottom: 12px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    margin: 0;
    width: 540px;
  }
`;

export const AboutMethod = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
  margin-bottom: 35px;

  color: ${p => p.theme.colors.third};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin: 0;
    margin-left: 20px;
  }
`;

export const StarLineImg = styled.img`
  margin-bottom: 12px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 0;
  }
`;

export const MethodList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    flex-direction: row;
  }
`;

export const LinkToCalculator = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 64px;
  padding: 0 51px;

  background-color: ${p => p.theme.colors.main};
  border-radius: 50px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.03em;

  color: ${p => p.theme.colors.white};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 358px;
    padding: 0 43px;
    margin: 0 auto;
  }
`;
