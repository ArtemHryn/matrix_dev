import { Box } from 'components/Box';

import { ConsultaionCard } from './ConsultationCard/ConsultationCard';
import {
  ConsultationsList,
  ConsultationsTitle,
  ContactMeSocial,
  IndividualRequestElement,
  IndividualRequestTitle,
} from './Consultations.styled';

import {cards} from './consultationInfo'



export const Consultations = () => {
  return (
    <Box mb={'68px'}>
      <Box
        display={[null, 'flex', 'flex']}
        alignItems={[null, 'center']}
        justifyContent={[null, 'space-between', 'space-between']}
      >
        <ConsultationsTitle>Консультации:</ConsultationsTitle>
      </Box>
      <ConsultationsList>
        {cards.map(card => (
          <ConsultaionCard
            key={card.text}
            card={card}
          />
        ))}
        <IndividualRequestElement>
          <IndividualRequestTitle>
            Также вы можете разобрать вашу проблему по индивидуальному запросу
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
