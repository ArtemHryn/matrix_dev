import { Box } from 'components/Box';
import { ExpressServiceCard } from './ExpressServiceCard/ExpressServiceCard';
import {
  AdditionalInfo,
  ExpressServicesList,
  ExpressServicesTitle,
} from './ExpressServices.styled';

import { cards } from './expressServicesInfo';

export const ExpressServices = () => {
  return (
    <Box mb="80px">
      <ExpressServicesTitle>Экспресс-услуги:</ExpressServicesTitle>
      <ExpressServicesList>
        {cards.map(card => (
          <ExpressServiceCard
            key={card.text}
            card={card}

          />
        ))}
      </ExpressServicesList>
      <AdditionalInfo>
        Также вы можете подарить трансформации своим близким. Больше о
        подарочных сертификатах тут.
      </AdditionalInfo>
    </Box>
  );
};
