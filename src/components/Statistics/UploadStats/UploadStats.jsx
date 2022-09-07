import PropTypes from 'prop-types';
import { Stat } from '../Stat/Stat';
import { StatList } from './UploadStats.styled';

export const UploadStats = ({ data }) => {
  return (
    <StatList>
      {data.map(({ id, label, percentage }) => (
        <Stat key={id} label={label} percentage={percentage} />
      ))}
    </StatList>
  );
};

UploadStats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
