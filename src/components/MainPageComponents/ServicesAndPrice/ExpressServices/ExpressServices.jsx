import { Box } from 'components/Box';
import { ExpressServiceCard } from './ExpressServiceCard/ExpressServiceCard';
import {
  AdditionalInfo,
  ExpressServicesList,
  ExpressServicesTitle,
  LinkToCert,
} from './ExpressServices.styled';

import { getExpressServiceCards } from './expressServicesInfo';
import { useTranslation } from 'react-i18next';

export const ExpressServices = () => {
  const { i18n, t } = useTranslation();
  return (
    <Box mb="80px">
      <ExpressServicesTitle>
        {t('ServicesAndPriceExpressServicesTitle')}:
      </ExpressServicesTitle>
      <ExpressServicesList>
        {getExpressServiceCards(i18n.language).map(card => (
          <ExpressServiceCard key={card.text} card={card} />
        ))}
      </ExpressServicesList>
      <AdditionalInfo>
        {t('ServicesAndPriceExpressServicesAdditionalInfo1')}{' '}
        <LinkToCert
          href="https://t.me/DariKarma"
          target="_blank"
          rel="noreferrer noopener"
        >
          {t('ServicesAndPriceExpressServicesCert')}
        </LinkToCert>{' '}
        {t('ServicesAndPriceExpressServicesAdditionalInfo2')}
      </AdditionalInfo>
    </Box>
  );
};
