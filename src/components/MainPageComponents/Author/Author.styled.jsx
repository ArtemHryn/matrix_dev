import styled from 'styled-components';

export const AuthorTitle = styled.h2`
  font-weight: 400;
  font-size: 44px;
  line-height: 58px;
  letter-spacing: 0.01em;
  margin-bottom: 25px;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
    line-height: 1;
    margin-bottom: 30px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 90px;
  }
`;

export const Name = styled.span`
  font-style: italic;
  font-size: 30px;
  line-height: 0.8;
  letter-spacing: 0.01em;

  color: #72499b;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 45px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.36;
  letter-spacing: 0.01em;

  margin-bottom: 25px;

  color: ${p => p.theme.colors.secondText};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 50px;
    font-size: 20px;
    line-height: 1.3;

    color: ${p => p.theme.colors.secondText};
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 25px;
    line-height: 1.44;
  }
`;

export const AuthorImg = styled.img`
  margin-bottom: 40px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin: 0;
    width: 390px;
    float: right;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    display: none;
  }
`;
export const AboutAuthor = styled.ul`
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 80px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    display: flex;
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
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-bottom: 0;
    :first-child {
      margin-right: 45px;
    }
  }
`;

export const Symbols = styled.img`
  margin-bottom: 12px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 10px;
    margin-right: auto;
  }
`;

export const AboutAuthorWork = styled.p`
  font-weight: 600;
  font-size: 23px;
  line-height: 1.22;

  color: #1f1f1f;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 25px;
    line-height: 1.2;
    margin-bottom: 15px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
  }
`;

export const AboutAuthorDesc = styled.p`
  font-size: 18px;
  line-height: 1.22;

  color: #1f1f1f;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 20px;
    line-height: 1.2;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 330px;
    font-size: 21px;
  }
`;
