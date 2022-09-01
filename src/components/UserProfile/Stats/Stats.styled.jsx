import styled from 'styled-components';

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-bottom: none;
  border-right: none;
  padding: ${p => p.theme.space[4]}px;
  flex-basis: calc((100% - 0px) / 3);
  margin: 0;
  background-color: ${p => p.theme.colors.staticBg};
  :first-child{
    border-left: none;
  }
`;

export const FieldName = styled.p`
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.xs};
  margin-bottom: ${p => p.theme.space[3]}px;
`

export const Statistic = styled.p`
  color: ${p => p.theme.colors.stats};
  font-weight: ${p => p.theme.fontWeights.bold};
`