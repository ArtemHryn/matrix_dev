import starInCircle from 'images/ServicesAndPrice/starInCircle.png';
import lock from 'images/ServicesAndPrice/lock.svg'
import { Button, CardDescription, CardElement, CardTitle, MainImg, Price, StarImg } from './ServiceCard.styled';

export const ServiceCard = ({ name, img, text }) => {
  return (
    <CardElement>
      <MainImg src={img} alt={name} />
      <StarImg src={starInCircle} alt="star" />
      <CardTitle>{name}</CardTitle>
      <CardDescription>{text}</CardDescription>
      <Price>$117</Price>
      <Button>
        Подробнее <img src={lock} alt="lock" />
      </Button>
    </CardElement>
  );
};
