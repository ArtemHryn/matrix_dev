import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Box } from 'components/Box';
import HealthCard from './HealthCard/HealthCard';
import { SetCardTypeBtn } from '../HealthMatrix.styled';
import { useMatrix } from 'pages/Calculator';
import { authorHelthCard, getHealthInfo } from 'helper/calculateMatrix';
import PasswordModal from './PasswordModal/PasswordModal';

const btnGradient =
  'linear-gradient(180deg, #FFF 19.44%, #F5E9FF 52.78%, #F7C8FF 100%);';
const btnGradientActive =
  'linear-gradient(180deg, #765D90 5.73%, rgba(198, 106, 201, 0.51) 100%)';

const HealthTables = ({ setCardType, cardType }) => {
  const { i18n, t } = useTranslation('calc');
  const [list, setList] = useState([]);
  const [authorMethod, setAuthorMethod] = useState({});
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showAuthorMethod, setShowAuthorMethod] = useState(false);

  const [formError, setFormError] = useState('');
  const [passValue, setPassValue] = useState('');
  const { matrixData } = useMatrix();

  useEffect(() => {
    if (showAuthorMethod) {
      setAuthorMethod(authorHelthCard(matrixData, i18n.language));
      return;
    }
    const result = getHealthInfo(matrixData, i18n.language);
    setList(result);
  }, [i18n.language, matrixData, showAuthorMethod]);

  const onFormSubmit = e => {
    e.preventDefault();
    if (passValue !== 'Dsaorniyn10234A') {
      setFormError(t('incorrectPassword'));
      return;
    }
    setShowPasswordModal(false);
    setShowAuthorMethod(true);
    setCardType(3);
  };
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
          onClick={() => {
            if (showAuthorMethod) {
              setCardType(3);
              return;
            }
            setShowPasswordModal(true);
          }}
        >
          {t('healthAuthor')} INTEGRITY*
        </SetCardTypeBtn>
      </Box>
      {list.map(card => (
        <HealthCard key={card.cardName} card={card} cardType={cardType} />
      ))}
      {authorMethod.id === cardType && (
        <HealthCard card={authorMethod} cardType={authorMethod.id} />
      )}
      {showPasswordModal && (
        <PasswordModal
          setShowPasswordModal={setShowPasswordModal}
          onFormSubmit={onFormSubmit}
          formError={formError}
          setFormError={setFormError}
          passValue={passValue}
          setPassValue={setPassValue}
        />
      )}
    </Box>
  );
};

export default HealthTables;
