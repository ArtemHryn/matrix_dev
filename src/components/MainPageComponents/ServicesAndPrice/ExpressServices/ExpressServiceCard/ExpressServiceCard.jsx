import { useTranslation } from 'react-i18next';
import { ModalLayout } from 'components/MainPageComponents/ModalWindows/ModalLayout';
import { ModalTeamplate } from 'components/MainPageComponents/ModalWindows/ModalTemplate/ModalTemplate';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  DetailsContainer,
  ExpressServiceCardElement,
  ExpressServiceCardText,
  Img,
  ShowDetailsButton,
} from './ExpressServiceCard.styled';

export const ExpressServiceCard = ({
  card: { img, text, imgTab, imgDesc, price, info, isHideStar },
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <ExpressServiceCardElement
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <picture>
        <source srcSet={imgDesc} media="(min-width: 1440px)" />
        <source srcSet={imgTab} media="(min-width: 768px)" />
        <Img srcSet={img} alt={text} loading="lazy" />
      </picture>

      <ExpressServiceCardText>{text}</ExpressServiceCardText>
      <AnimatePresence onExitComplete={() => null}>
        {showDetails && (
          <DetailsContainer
            initial={{ opacity: 0, transition: { duration: 0.3 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <ShowDetailsButton onClick={() => setShowModal(true)}>
              {t('ServicesAndPriceDetail')}
            </ShowDetailsButton>
          </DetailsContainer>
        )}
        {showModal && (
          <ModalLayout
            key={text}
            setShowModal={setShowModal}
            boxShadow="0px 0px 30px rgba(190, 148, 232, 0.3);"
            backgroundColor="rgba(255, 255, 255, 0.95);"
            isHideStar={isHideStar}
          >
            <ModalTeamplate info={info} price={price} title={text} />
          </ModalLayout>
        )}
      </AnimatePresence>
    </ExpressServiceCardElement>
  );
};
