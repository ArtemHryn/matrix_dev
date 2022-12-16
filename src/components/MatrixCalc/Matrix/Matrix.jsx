import { Box } from 'components/Box';
import { CenterSpan, CenterSpan2, Img } from './Matrix.styled';
import commonMatrix from '../../../images/commonMatrix2.svg';
import { allData } from 'helper/calculateMatrix';
import { TopMatrix } from './Sides/Top/TopMatrix';
import { LeftMatrix } from './Sides/Left/LeftMatrix';
import { BottomMatrix } from './Sides/Bottom/BottomMatrix';
import { RightMatrix } from './Sides/Right/RightMatrix';
import { GenericSquare } from './Sides/GenericSquare/GenericSquare';
import { SoulCrystal } from './SoulCrystal/SoultCrystal';

export const Matrix = ({ date, isGenerated }) => {
  const data = allData(date, isGenerated);

  return (
    <Box position="relative">
      <Img src={commonMatrix} alt="Matrix" />
      <TopMatrix data={data} />
      <LeftMatrix data={data} />
      <BottomMatrix data={data} />
      <RightMatrix data={data} />
      <CenterSpan>{data.center}</CenterSpan>
      <CenterSpan2>{data.center2}</CenterSpan2>
      <GenericSquare data={data} />
      <SoulCrystal data={data} />
    </Box>
  );
};
