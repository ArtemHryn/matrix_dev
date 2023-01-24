import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SectionBox = styled.section`
  padding: 54px 0 45px;
  background-image: linear-gradient(
    to bottom,
    rgba(158, 118, 255, 0.28) 50%,
    #fff
  );
`;

export const ProjectText = styled.p`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
  color: #000000;
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.title};
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 1.71;

  letter-spacing: 0.01em;

  color: #9072af;
`;

export const MoveText = styled.p`
  width: 302px;
  font-family: ${p => p.theme.main};
  font-style: italic;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.01em;

  color: #161616;
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
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.03em;

  color: #ffffff;
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

  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;

  letter-spacing: 0.03em;

  color: #9072af;
`;
