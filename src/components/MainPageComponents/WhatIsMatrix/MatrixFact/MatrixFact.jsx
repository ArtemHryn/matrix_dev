import { FactElement, FactTitle, Img, OneFact } from "./MatrixFact.styled"

export const MatrixFact = ({name, img, text}) => {
    return (
      <FactElement key={name}>
        <FactTitle>{name}</FactTitle>
        <Img src={img} alt={name} />
        <OneFact>{text}</OneFact>
      </FactElement>
    );
}