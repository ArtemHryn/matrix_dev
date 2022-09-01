import { StatsList, StatsListItem, FieldName, Statistic } from './Stats.styled';

export const Stats = ({ stats }) => {
  const { followers, views, likes } = stats;
  return (
    <StatsList>
      <StatsListItem>
        <FieldName>Followers</FieldName>
        <Statistic>{followers}</Statistic>
      </StatsListItem>
      <StatsListItem>
        <FieldName>Views</FieldName>
        <Statistic>{views}</Statistic>
      </StatsListItem>
      <StatsListItem>
        <FieldName>Likes</FieldName>
        <Statistic>{likes}</Statistic>
      </StatsListItem>
    </StatsList>
  );
};
