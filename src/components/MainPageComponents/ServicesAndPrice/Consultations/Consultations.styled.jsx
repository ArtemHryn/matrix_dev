import styled from 'styled-components';

export const ConsultationsTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1;
  letter-spacing: 0.01em;

  margin-bottom: 8px;

  color: #9072af;
`;

export const SolutionsText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  margin-bottom: 27px;

  color: #000000;
`;

export const ConsultationsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 150px);

  margin-bottom: 30px;
`;
