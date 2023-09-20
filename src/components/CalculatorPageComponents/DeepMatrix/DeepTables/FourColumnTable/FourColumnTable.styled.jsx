import styled from 'styled-components';
import { border, color, flexbox, typography } from 'styled-system';

export const TableTitle = styled.p`
  padding: 16px 0;
  text-align: center;
  border: 0.8px solid #72499b;
  border-radius: 9px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(249, 237, 255, 0.7) 100%);

  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.main};
  font-size: 20px;
  font-style: italic;
  line-height: 1.42; /* 142.218% */
  letter-spacing: 0.01em;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 26px;
    line-height: 1.6;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 32px;
  }
`;

export const ColumnList = styled.ul`
  display: flex;

  border-radius: 9px;
  border: ${p => p.theme.borders.tables};

  background-color: rgba(255, 255, 255, 0.7);
`;

export const ColumnListArcanes = styled(ColumnList)`
  flex-direction: column;
  background-color: transparent;
`;

export const ColumnItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${p => p.theme.borders.tables};
  ${border}
`;

export const ColumnName = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  border-left: ${p => p.theme.borders.tables};

  color: #72499b;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6; /* 159.279% */
  letter-spacing: 0.01em;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 18px;
    height: 48px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 24px;
    height: 52px;
  }
  ${border}
  ${flexbox}
  ${color}
  ${typography}
`;
