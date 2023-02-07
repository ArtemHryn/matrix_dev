import styled from 'styled-components';

export const FeedbackTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.01em;

  margin-bottom: 20px;

  color: ${p => p.theme.colors.main};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 20px;

    font-size: 80px;
    line-height: 1.12;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 90px;
    line-height: 1;
  }
`;

export const FeedbackDescription = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.01em;

  color: #3d3d3d;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 20px;
    line-height: 1.1;
    width: 317px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 30px;
    line-height: 1.2;
    width: 490px;
  }
`;

export const YourDarina = styled.h5`
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.8;
  letter-spacing: 0.01em;
  text-align: right;
  margin-bottom: 30px;

  color: #72499b;
`;

export const Cont = styled.img`
  border-radius: 10px;
  max-width: 100%;
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    max-width: 390px;
  }
`;

export const Separator = styled.img`
  width: 179px;
  margin: 30px auto 0;
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-top: 60px;
  }
`;

