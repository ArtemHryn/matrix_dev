import { Stat } from '../Stat/Stat';
import { StatList } from './UploadStats.styled';

export const UploadStats = ({ data }) => {
  return (
    <StatList>
      {data.map(({ id, label, percentage }) => (
        <Stat
          key={id}
          label={label}
          percentage={percentage}
        />
      ))}
    </StatList>
  );
};

