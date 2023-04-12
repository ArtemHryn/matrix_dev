import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  ConcultationCardElement,
  ConcultationCardText,
  DetailsContainer,
  ShowDetailsButton,
} from './ConsultationCard.styled';
import { ModalLayout } from 'components/MainPageComponents/ModalWindows/ModalLayout';
import { ModalTeamplate } from 'components/MainPageComponents/ModalWindows/ModalTemplate/ModalTemplate';

export const ConsultaionCard = ({
  card: {
    img,
    text,
    imgtab,
    imgDesc,
    price,
    isHideStar,
    component: Component,
    info,
  },
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onOpenModal = () => {
    setShowModal(true);
    setShowDetails(false);
  };
  return (
    <ConcultationCardElement
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <picture>
        <source srcSet={imgDesc} media="(min-width: 1440px)" />
        <source srcSet={imgtab} media="(min-width: 768px)" />
        <source srcSet={img} />
        <img src={img} alt="consultation card" loading="lazy" />
        <ConcultationCardText>{text}</ConcultationCardText>
      </picture>
      <AnimatePresence onExitComplete={() => null}>
        {showDetails && (
          <DetailsContainer
            initial={{ opacity: 0, transition: { duration: 0.3 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <ShowDetailsButton onClick={onOpenModal}>
              Подробнее
            </ShowDetailsButton>
          </DetailsContainer>
        )}
        {showModal && (
          <ModalLayout
            key={text}
            isHideStar={isHideStar}
            setShowModal={setShowModal}
            boxShadow="0px 0px 30px rgba(190, 148, 232, 0.3);"
            backgroundColor="rgba(255, 255, 255, 0.95);"
          >
            {info ? (
              <ModalTeamplate info={info} title={text} price={price} />
            ) : (
              <Component price={price} />
            )}
          </ModalLayout>
        )}
      </AnimatePresence>
    </ConcultationCardElement>
  );
};
