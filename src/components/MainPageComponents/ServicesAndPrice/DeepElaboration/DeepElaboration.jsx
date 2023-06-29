import { ServiceCard } from './ServiceCard/ServiceCard';
import { CardList } from './DeepElaboration.styled';

import getdeepElaborationServicesCards from 'helper/deepElabirationServiceCards';
import { useTranslation } from 'react-i18next';

export const DeepElaboration = () => {
  const { i18n } = useTranslation();
  return (
    <CardList>
      {getdeepElaborationServicesCards(i18n.language).map(
        ({ name, img, text, component, price }) => (
          <ServiceCard
            name={name}
            img={img}
            text={text}
            key={name}
            component={component}
            price={price}
          />
        )
      )}
    </CardList>
  );
};
