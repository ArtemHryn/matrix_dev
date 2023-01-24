import styled from "styled-components";

export const ExpressServicesTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.01em;

  color: #9072af;
`;

export const ExpressServicesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 150px);

  margin-bottom: 20px;
`;

export const AdditionalInfo = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.01em;

  color: #3d3d3d;
`;