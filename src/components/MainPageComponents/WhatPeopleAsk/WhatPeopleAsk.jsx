import { Box } from 'components/Box';
import { QuestionAnswer } from './QuestionAnswer/QuestionAnswer';
import questionsAnswers from './questionAnswerArray';
import { Title } from './WhatPeopleAsk.styled';

export const WhatPeopleAsk = () => {
  return (
    <Box as="section" pt="40px" pb="40px" id="peopleAsk">
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <Title>Меня часто спрашивают...</Title>
        <ul>
          {questionsAnswers.map(({ question, answer }) => (
            <QuestionAnswer
              key={question}
              question={question}
              answer={answer}
            />
          ))}
        </ul>
      </Box>
    </Box>
  );
};
