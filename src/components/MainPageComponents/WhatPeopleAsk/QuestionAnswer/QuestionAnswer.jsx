import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { ReactComponent as OpenButton } from 'images/whatPeopleAsk/openButton.svg';
import {
  Answer,
  Button,
  LittleStar,
  QuestionElement,
  Title,
  TitleContainer,
} from './QuestionAnswer.styled';

export const QuestionAnswer = ({ question, answer, img }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <QuestionElement>
      <TitleContainer>
        <Title>{question}</Title>
        <Button type="button" onClick={() => setShowAnswer(prev => !prev)}>
          <OpenButton />
        </Button>
      </TitleContainer>

      <AnimatePresence mode="wait" onExitComplete={() => null}>
        {showAnswer && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, y: -30, transition: { duration: 0.3 } }}
          >
            <Answer>
              {answer} {img && <LittleStar src={img} alt="star" />}
            </Answer>
          </motion.div>
        )}
      </AnimatePresence>
    </QuestionElement>
  );
};
