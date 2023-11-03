import { useTranslation, Trans } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Box } from 'components/Box';
import HealthCard from './HealthCard/HealthCard';
import {
  AuthorLessonLink,
  AuthorLessonText,
  SetCardTypeBtn,
  Warning,
  WarningText,
} from '../HealthMatrix.styled';
import { useMatrix } from 'pages/Calculator';
import { authorHealthCard, getHealthInfo } from 'helper/calculateMatrix';

const btnGradient = 'linear-gradient(180deg, #FFF 19.44%, #F5E9FF 52.78%, #F7C8FF 100%);';
const btnGradientActive = 'linear-gradient(180deg, #765D90 5.73%, rgba(198, 106, 201, 0.51) 100%)';

const HealthTables = ({ setCardType, cardType }) => {
  const { i18n, t } = useTranslation('calc');
  const [list, setList] = useState([]);
  const [authorMethod, setAuthorMethod] = useState([]);

  const { matrixData } = useMatrix();

  useEffect(() => {
    setAuthorMethod(authorHealthCard(matrixData, i18n.language));
    const result = getHealthInfo(matrixData, i18n.language);
    setList(result);
  }, [i18n.language, matrixData]);

  return (
    <Box width={[null, null, '900px']} m={'0 auto'}>
      <Box
        display="flex"
        mb={['12px', '28px']}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gridGap={['5px', '10px']}
      >
        <SetCardTypeBtn
          color={cardType === 1 ? 'white' : null}
          bg={cardType === 1 ? '#765D90' : null}
          onClick={() => setCardType(1)}
        >
          {t('healthCardTypePersonal')}
        </SetCardTypeBtn>
        <SetCardTypeBtn
          width={['80%']}
          color={cardType === 2 ? 'white' : null}
          background={cardType === 2 ? btnGradientActive : btnGradient}
          onClick={() => setCardType(2)}
        >
          {t('healthAuthor')} INTEGRITY*
        </SetCardTypeBtn>
      </Box>
      {cardType === 1 && (
        <Box display="flex" flexDirection="column" gridGap={['10px', '20px', '40px']}>
          {list.map(card => (
            <HealthCard key={card.cardName} card={card} />
          ))}
        </Box>
      )}
      {cardType === 2 && (
        <>
          <Box display="flex" flexDirection="column" gridGap={['10px']} my={['20px']}>
            <Box
              mt={['14px']}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gridGap="8px"
            >
              <AuthorLessonText>{t('healthAuthorLesson')}</AuthorLessonText>
              <AuthorLessonLink
                href="https://youtube.com/playlist?list=PLSMNBvCJA4Ot8KXprQnpJqvcjuc_vdsd1&si=ndjLHp3XicpxvK3U"
                target="_blank"
                rel="noreferrer noopener"
              >
                {t('check')}
              </AuthorLessonLink>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gridGap={['10px', '20px', '40px']}>
            {authorMethod.map(table => (
              <HealthCard card={table} key={table.cardName} />
            ))}
          </Box>
          <WarningText as="p">
            <Trans i18nKey="healthAuthorWarning1" ns="calc">
              <Warning>ВНИМАНИЕ!</Warning> Система "INTEGRITY" является разработкой команды
              "Dari.Karma" и представлен на сайте для тестирования.
            </Trans>
          </WarningText>
          <WarningText as="p">
            <Trans i18nKey="healthAuthorWarning2" ns="calc">
              Данный расчёт карты здоровья является авторским и <Warning>не соответствует </Warning>
              алгоритму расчёта Н. Ладини
            </Trans>
          </WarningText>
        </>
      )}
    </Box>
  );
};

export default HealthTables;
