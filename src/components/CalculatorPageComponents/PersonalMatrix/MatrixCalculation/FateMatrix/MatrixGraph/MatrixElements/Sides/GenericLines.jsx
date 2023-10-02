import FatherEarth from './FatherEarth';
import FatherSpiritLine from './FatherSpiritLine';
import MotherEarth from './MotherEarth';
import MotherSpirit from './MotherSpirit';

const GenericLines = ({ matrixData }) => {
  return (
    <>
      <FatherSpiritLine matrixData={matrixData} />
      <FatherEarth matrixData={matrixData} />
      <MotherSpirit matrixData={matrixData} />
      <MotherEarth matrixData={matrixData} />
    </>
  );
};

export default GenericLines;
