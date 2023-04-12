import starInCircle from 'images/ServicesAndPrice/starInCircle.png';
import {
  Button,
  CardDescription,
  CardElement,
  CardTitle,
  MainImg,
  Price,
  StarImg,
} from './ServiceCard.styled';
import { useState } from 'react';
import { ModalLayout } from 'components/MainPageComponents/ModalWindows/ModalLayout';
import { AnimatePresence } from 'framer-motion';

export const ServiceCard = ({ name, img, text, price, component: Component }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <CardElement>
      <MainImg src={img} alt={name} />
      <StarImg src={starInCircle} alt="star" />
      <CardTitle>{name}</CardTitle>
      <CardDescription>{text}</CardDescription>
      <Price>{price}$</Price>
      <Button onClick={() => setShowModal(true)}>
        Подробнее
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
