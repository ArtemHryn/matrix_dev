import styled from 'styled-components';

export const ConsultationsTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 30px;
  line-height: 1;
  letter-spacing: 0.01em;

  margin-bottom: 8px;

  color: ${p => p.theme.colors.main};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 40px;
    line-height: 1.2;
    margin-bottom: 0;
  }
`;

// export const SolutionsText = styled.p`
//   font-family: ${p => p.theme.fonts.main};
//   font-style: normal;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 1.22;

//   color: ${p => p.theme.colors.secondText};
//   @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
//     font-size: 20px;
//     line-height: 1.2;
//   }
// `;

export const ConsultationsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 150px);

  margin-bottom: 30px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    grid-template-columns: repeat(3, 240px);
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    grid-template-columns: repeat(3, calc((100% - 200px) / 3));
    justify-content: center;
  }
`;
