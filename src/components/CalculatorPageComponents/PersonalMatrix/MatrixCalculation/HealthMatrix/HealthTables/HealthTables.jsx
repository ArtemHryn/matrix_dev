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
  const [authorMethod, setAuthorMethod] = useState({});

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
          color={cardType === 2 ? 'white' : null}
          bg={cardType === 2 ? '#765D90' : null}
          onClick={() => setCardType(2)}
        >
          {t('healthCardTypeHolistic')}
        </SetCardTypeBtn>
        <SetCardTypeBtn
          width={['80%']}
          color={cardType === 3 ? 'white' : null}
          background={cardType === 3 ? btnGradientActive : btnGradient}
          onClick={() => setCardType(3)}
        >
          {t('healthAuthor')} INTEGRITY*
        </SetCardTypeBtn>
      </Box>
      {list.map(card => (
        <HealthCard key={card.cardName} card={card} cardType={cardType} />
      ))}
      {authorMethod.id === cardType && (
        <>
          <Box display="flex" flexDirection="column" gridGap={['10px']} my={['20px']}>
            <WarningText as="p">
              <Trans i18nKey="healthAuthorWarning1" ns="calc">
                <Warning>ВНИМАНИЕ!</Warning> Расчет "INTEGRITY" является разработкой команды
                "Dari.Karma" и представлен на сайте для тестирования.
              </Trans>
            </WarningText>
            <WarningText as="p">
              <Trans i18nKey="healthAuthorWarning2" ns="calc">
                Данный расчёт карты здоровья является авторским и{' '}
                <Warning>не соответствует </Warning>
                алгоритму расчёта Н. Ладини
              </Trans>
            </WarningText>
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
                href="https://www.buymeacoffee.com/dari.karma/e/157070"
                target="_blank"
                rel="noreferrer noopener"
              >
                {t('check')}
              </AuthorLessonLink>
            </Box>
          </Box>
          <HealthCard card={authorMethod} cardType={authorMethod.id} />
        </>
      )}
    </Box>
  );
};

export default HealthTables;
