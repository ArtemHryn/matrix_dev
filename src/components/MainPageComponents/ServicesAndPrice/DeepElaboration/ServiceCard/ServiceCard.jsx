import starInCircle from 'images/ServicesAndPrice/starInCircle.png';
import {
  Button,
  CardDescription,
  CardElement,
  CardTitle,
  MainImg,
  StarImg,
} from './ServiceCard.styled';
import { useState } from 'react';
import { ModalLayout } from 'components/MainPageComponents/ModalWindows/ModalLayout';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const ServiceCard = ({ name, img, text, component: Component }) => {
  const [showModal, setShowModal] = useState(false);
  const {t} = useTranslation()
  return (
    <CardElement>
      <MainImg src={img} alt={name} />
      <StarImg src={starInCircle} alt="star" />
      <CardTitle>{name}</CardTitle>
      <CardDescription>{text}</CardDescription>
      <Button onClick={() => setShowModal(true)}>
        {t('ServicesAndPriceDetail')}
      </Button>
      <AnimatePresence mode="wait" onExitComplete={() => null}>
        {showModal && (
          <ModalLayout setShowModal={setShowModal}>
            <Component />
          </ModalLayout>
        )}
      </AnimatePresence>
    </CardElement>
  );
};
