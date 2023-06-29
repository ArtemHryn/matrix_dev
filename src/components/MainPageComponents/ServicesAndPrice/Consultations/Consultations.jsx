import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { ConsultaionCard } from './ConsultationCard/ConsultationCard';
import {
  ConsultationsList,
  ConsultationsTitle,
  ContactMeSocial,
  IndividualRequestElement,
  IndividualRequestTitle,
} from './Consultations.styled';

import { getConsultationCardsList } from './consultationInfo';

export const Consultations = () => {
  const { i18n, t } = useTranslation();
  return (
    <Box mb={'68px'}>
      <Box
        display={[null, 'flex', 'flex']}
        alignItems={[null, 'center']}
        justifyContent={[null, 'space-between', 'space-between']}
      >
        <ConsultationsTitle>
          {t('ServicesAndPriceConsultationsTitle')}:
        </ConsultationsTitle>
      </Box>
      <ConsultationsList>
        {getConsultationCardsList(i18n.language).map(card => (
          <ConsultaionCard key={card.text} card={card} />
        ))}
        <IndividualRequestElement>
          <IndividualRequestTitle>
            {t('ServicesAndPriceConsultationsIndividualRequest')}
          </IndividualRequestTitle>
          <Box display="flex" justifyContent="center">
            <ContactMeSocial
              href="https://instagram.com/dari.karma?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
            </ContactMeSocial>
            <ContactMeSocial
              href="https://t.me/+eAczkWqkslIzMjky"
              target="_blank"
              rel="noreferrer noopener"
            >
              Telegram
            </ContactMeSocial>
          </Box>
        </IndividualRequestElement>
      </ConsultationsList>
    </Box>
  );
};
