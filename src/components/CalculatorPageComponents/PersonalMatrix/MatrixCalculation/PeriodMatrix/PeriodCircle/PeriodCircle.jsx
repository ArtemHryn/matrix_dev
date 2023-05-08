import { useMatrix } from 'pages/Calculator';
import { AgeArcane } from '../PeriodMatrix.styled';

const PeriodCircle = () => {
  const { ageList } = useMatrix();

  return (
    <>
      {ageList &&
        ageList.map(({ age, arcane, top, left, display }) => (
          <AgeArcane key={age} top={top} left={left} display={display}>
            {arcane}
          </AgeArcane>
        ))}
    </>
  );
};

export default PeriodCircle;
