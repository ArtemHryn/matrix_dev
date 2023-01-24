import styled from 'styled-components';
import goldenBorder from 'images/whatPeopleAsk/goldenBorder.png';

export const QuestionElement = styled.li`
  padding: 12px 0;
  border-bottom: 2px solid #72499b;
  border-image: url(${goldenBorder});
  border-image-slice: 0 0 10 0;
  border-image-width: 2px;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const Title = styled.h4`
  max-width: 250px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
`;
export const Button = styled.button`
  background-color: transparent;
`;

export const Answer = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  color: #000000;
`;

