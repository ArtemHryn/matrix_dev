import { Box } from '../Box';
import { AdditionalSpinnerPart, MainSpinnerPart } from './Spinner.styled';

export const Spinner = () => {
  return (
    <Box
      position="relative"
      width="100vw"
      height="100vh"
    >
      <MainSpinnerPart>Dari.Karma</MainSpinnerPart>
      <AdditionalSpinnerPart>Dari.Karma</AdditionalSpinnerPart>
    </Box>
  );
};
