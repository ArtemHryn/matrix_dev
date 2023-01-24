import { ExpressServiceCardElement, ExpressServiceCardText } from "./ExpressServiceCard.styled"

export const ExpressServiceCard = ({img, text}) => {
    return (
      <ExpressServiceCardElement key={text}>
        <img src={img} alt="card" />
        <ExpressServiceCardText>{text}</ExpressServiceCardText>
      </ExpressServiceCardElement>
    );
}