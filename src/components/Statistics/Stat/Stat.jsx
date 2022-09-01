import { StatItem } from "./Stat.styled";

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