import { FactElement, FactTitle, FactTitleContainer, Img, OneFact } from "./MatrixFact.styled"

export const MatrixFact = ({name, img, text}) => {
    return (
      <FactElement key={name}>
        <FactTitleContainer>
          <FactTitle>{name}</FactTitle>
        </FactTitleContainer>
        <Img src={img} alt={name} />
        <OneFact>{text}</OneFact>
      </FactElement>
    );
}