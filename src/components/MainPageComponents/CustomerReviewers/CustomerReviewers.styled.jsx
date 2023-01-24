import styled from 'styled-components';

export const FeedbackTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.01em;

  margin-bottom: 20px;

  color: #9072af;
`;

export const FeedbackDescription = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;

  color: #3d3d3d;
`;

export const YourDarina = styled.h5`
  font-family: 'Cormorant';
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
  width: 200px;
`;

export const Separator = styled.img`
  width: 179px;
  margin: 30px auto 0;
`;
