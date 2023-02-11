import styled from 'styled-components';
import goldenBorder from 'images/whatPeopleAsk/goldenBorder.png';

export const QuestionElement = styled.li`
  padding: 12px 0;
  border-bottom: 2px solid #72499b;
  border-image: url(${goldenBorder});
  border-image-slice: 0 0 10 0;
  border-image-width: 2px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    padding: 24px 0;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 560px;
    margin-right: 37px;
    padding: 18px 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;

`;
export const Title = styled.h4`
  max-width: 250px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.22;

  color: ${p => p.theme.colors.secondTitle};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    max-width: 100%;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 20px;
    line-height: 1.2;
    width: 380px;
  }
`;
export const Button = styled.button`
  background-color: transparent;
`;

export const Answer = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;

  color: ${p => p.theme.colors.secondTitle};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 18px;
    line-height: 1.22;
  }
`;

export const LittleStar = styled.img`
  display: inline-block;
  width: 19px;
`