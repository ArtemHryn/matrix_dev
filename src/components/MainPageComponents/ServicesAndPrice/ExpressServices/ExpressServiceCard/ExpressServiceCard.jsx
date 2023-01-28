import { ExpressServiceCardElement, ExpressServiceCardText, Img } from "./ExpressServiceCard.styled"

export const ExpressServiceCard = ({img, text, imgTab}) => {
    return (
      <ExpressServiceCardElement key={text}>
        <picture>
          <source srcSet={imgTab} media="(min-width: 768px)" />
          <Img srcSet={img} alt="card" />
        </picture>

        <ExpressServiceCardText>{text}</ExpressServiceCardText>
      </ExpressServiceCardElement>
    );
}