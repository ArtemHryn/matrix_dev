import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { QuestionAnswer } from './QuestionAnswer/QuestionAnswer';
import questionsAnswers from './questionAnswerArray';
import { List, Title } from './WhatPeopleAsk.styled';

export const WhatPeopleAsk = () => {
  const { t, i18n } = useTranslation();
  return (
    <Box as="section" py={['40px', '40px', '90px']} id="peopleAsk">
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <Title>{t('peopleAsk')}...</Title>
        <List>
          {questionsAnswers(i18n.language).map(({ question, answer, img }) => (
            <QuestionAnswer
              key={question}
              question={question}
              answer={answer}
              img={img}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};
