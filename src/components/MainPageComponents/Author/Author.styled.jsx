import styled from 'styled-components';

export const AuthorTitle = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: 0.01em;
  margin-bottom: 25px;

  color: ${p => p.theme.colors.main};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
    line-height: 1;
    margin-bottom: 30px;
  }
`;

export const Name = styled.span`
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 0.8;
  letter-spacing: 0.01em;

  color: #72499b;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 45px;
  }
`;

export const Description = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.36;
  letter-spacing: 0.01em;

  margin-bottom: 25px;

  color: ${p => p.theme.colors.secondText};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 50px;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.3;

    color: ${p => p.theme.colors.secondText};
  }
`;

export const AuthorImg = styled.img`
  margin-bottom: 40px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin: 0;
    width: 390px;
    float: right;
  }
`;
export const AboutAuthor = styled.ul`
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
   margin-bottom: 54px;
  }
`;

export const AboutAuthorListElement = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 34px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 48px;
  }
`;

export const Symbols = styled.img`
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 10px;
    margin-right: auto;
  }
`;

export const AboutAuthorWork = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;

  color: #1f1f1f;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 15px;
  }
`;

export const AboutAuthorDesc = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #1f1f1f;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 20px;
    line-height: 24px;
  }
`;
