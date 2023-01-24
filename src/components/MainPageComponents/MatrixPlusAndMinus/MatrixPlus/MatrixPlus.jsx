import { motion } from 'framer-motion';
import { Box } from 'components/Box';
import compltedMatrix from 'images/matrixPlusAndMinus/pazzlesInPlus.png';
import { PuzzleTextPlus } from './MatrixPlus.styled';
import puzzlesTextPlus from './puzzleTextPlus';

export const MatrixPlus = () => {
  return (
    <motion.div
      initial={{
        x: -300,
        opacity: 0.3,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.9 },
      }}
      exit={{
        x: -300,
        opacity: 0.3,
        transition: { duration: 0.2 },
      }}
    >
      <Box position="relative" width="307px" height="612px">
        <img src={compltedMatrix} alt="completedMatrix" />
        {puzzlesTextPlus.map(({ text, xm, ym, maxWidth }) => (
          <PuzzleTextPlus key={text} left={xm} top={ym} maxWidth={maxWidth}>
            {text}
          </PuzzleTextPlus>
        ))}
      </Box>
    </motion.div>
  );
};
