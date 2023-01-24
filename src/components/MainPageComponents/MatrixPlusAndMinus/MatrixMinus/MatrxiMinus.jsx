import { motion } from 'framer-motion';
import { Box } from 'components/Box';
import { AnimatedPuzzle, Puzzle, PuzzleText } from './MatrixMinus.styled';
import puzzlesText from './puzzlesText';
import matrixMinus from 'images/matrixPlusAndMinus/pazzles.png';
import matrixPuzzle from 'images/matrixPlusAndMinus/animatedPuzzle.png';


export const MatrixMinus = () => {
  return (
    <motion.div
      initial={{
        x: 300,
        opacity: 0.3,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.9 },
      }}
      exit={{
        x: 300,
        opacity: 0.3,
        transition: { duration: 0.2 },
      }}

    >
      <Box position="relative" width="307px" height="612px">
        <img src={matrixMinus} alt="matrixMinus" />
        <AnimatedPuzzle className="animate__hinge">
          <Puzzle src={matrixPuzzle} alt="puzzle" />
          <PuzzleText top="55px" left="20px" maxWidth="109px" rotate="-11deg">
            испытываешь финансовые трудности
          </PuzzleText>
        </AnimatedPuzzle>

        {puzzlesText.map(({ text, xm, ym, r, maxWidth }) => (
          <PuzzleText
            top={ym}
            left={xm}
            key={text}
            rotate={r}
            maxWidth={maxWidth}
          >
            {text}
          </PuzzleText>
        ))}
      </Box>
    </motion.div>
  );
};
