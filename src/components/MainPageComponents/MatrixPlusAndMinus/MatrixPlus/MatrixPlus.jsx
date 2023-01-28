import { motion } from 'framer-motion';
import { Box } from 'components/Box';
import compltedMatrix from 'images/matrixPlusAndMinus/pazzlesInPlus.png';
import compltedMatrixTab from 'images/matrixPlusAndMinus/matrixInPlusTab.png';
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
        transition: { duration: 0.9, type: 'linear', delayChildren: 0.5 },
      }}
      exit={{
        x: -300,
        opacity: 0.3,
        transition: { duration: 0.9, type: 'linear', delayChildren: 0.5 },
      }}
    >
      <Box
        position="relative"
        width={['307px', '100%']}
        height={['612px', '100%']}
      >
        <picture>
          <source srcSet={compltedMatrixTab} media="(min-width: 768px)" />
          <img srcSet={compltedMatrix} alt="completedMatrix" />
        </picture>
        {puzzlesTextPlus.map(
          ({ text, xm, ym, xt, yt, maxWidth, maxWidthTab }) => (
            <PuzzleTextPlus
              key={text}
              left={[xm, xt]}
              top={[ym, yt]}
              maxWidth={[maxWidth, maxWidthTab]}
            >
              {text}
            </PuzzleTextPlus>
          )
        )}
      </Box>
    </motion.div>
  );
};
