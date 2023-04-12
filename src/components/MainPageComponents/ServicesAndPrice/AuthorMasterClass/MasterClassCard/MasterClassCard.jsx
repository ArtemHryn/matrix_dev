import { Box } from "components/Box";
import { Button, CardTitle, Img, MasterClassCardElement, ServiceDuration, ServiceFormat, ServiceList, ServicePrice, ServiceText, TitleContainer } from "./MasterClassCard.styled";

const backgroundGradient = 'linear-gradient(to right,#000 10%, rgba(255, 255, 255, 0) 0%)'

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
      <Box>
        <TitleContainer>
          <CardTitle>
            <Img src={img} alt={title} loading="lazy" /> {title}
          </CardTitle>
        </TitleContainer>

        <ServiceList>
          {services.map(service => (
            <li key={service}>
              <ServiceText>{service}</ServiceText>
            </li>
          ))}
        </ServiceList>
        <Box
          mb={['34px', '34px', '50px']}
          display={[null, null, 'flex']}
          backgroundImage={[null, null, backgroundGradient]}
          backgroundPosition={[null, null, 'bottom']}
          backgroundSize={[null, null, '15px 2px']}
          backgroundRepeat={[null, null, 'repeat-x']}
        >
          <ServiceFormat>{format}</ServiceFormat>
          <Box display={[null, null, 'flex']} flexDirection="column">
            <ServiceDuration>{duration}</ServiceDuration>
            {price && <ServicePrice>Стоимость {price}$</ServicePrice>}
          </Box>
        </Box>
      </Box>
      <Button
        href="https://t.me/DariKarma"
        target="_blank"
        rel="noreferrer noopener"
      >
        Скоро доступно
      </Button>
    </MasterClassCardElement>
  );
};
