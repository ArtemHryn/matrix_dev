import { StatItem } from "./Stat.styled";
import PropTypes from 'prop-types';


export const Stat = ({ id, label, percentage }) => {
  return (
    <StatItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StatItem>
  );
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Stat.propType = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}