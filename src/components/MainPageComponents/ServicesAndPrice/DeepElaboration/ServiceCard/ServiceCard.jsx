import starInCircle from 'images/ServicesAndPrice/starInCircle.png';
import lock from 'images/ServicesAndPrice/lock.svg';
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

export const ServiceCard = ({ name, img, text, component: Component }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <CardElement>
      <MainImg src={img} alt={name} />
      <StarImg src={starInCircle} alt="star" />
      <CardTitle>{name}</CardTitle>
      <CardDescription>{text}</CardDescription>
      <Price>$117</Price>
      <Button onClick={() => setShowModal(true)}>
        Подробнее <img src={lock} alt="lock" />
      </Button>
      <AnimatePresence mode="wait" onExitComplete={() => null}>
        {showModal && (
          <ModalLayout key={name} setShowModal={setShowModal}>
            <Component setShowModal={setShowModal} />
          </ModalLayout>
        )}
      </AnimatePresence>
    </CardElement>
  );
};
