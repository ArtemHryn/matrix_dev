import { Button, CardTitle, Img, MasterClassCardElement, ServiceDuration, ServiceFormat, ServiceList, ServicePrice, ServiceText, TitleContainer } from "./MasterClassCard.styled";

export const MasterClassCard = ({
  title,
  img,
  services,
  format,
  duration,
  price,
}) => {
  return (
    <MasterClassCardElement>
      <TitleContainer>
        <CardTitle>
          <Img src={img} alt={title} /> {title}
        </CardTitle>
      </TitleContainer>

      <ServiceList>
        {services.map(service => (
          <li key={service}>
            <ServiceText>{service}</ServiceText>
          </li>
        ))}
      </ServiceList>
      <ServiceFormat>{format}</ServiceFormat>
      <ServiceDuration>{duration}</ServiceDuration>
      <ServicePrice>Стоимость {price}$</ServicePrice>
      <Button>Присоединится</Button>
    </MasterClassCardElement>
  );
};
