import {
  FactElement,
  FactTitle,
  FactTitleContainer,
  Img,
  OneFact,
} from './MatrixFact.styled';

export const MatrixFact = ({ name, img, text, imgDesk }) => {
  return (
    <FactElement key={name}>
      <FactTitleContainer>
        <FactTitle>{name}</FactTitle>
      </FactTitleContainer>
      <picture>
        <source srcSet={imgDesk} media="(min-width: 1440px)" />
        <Img src={img} alt={name} loading="lazy" />
      </picture>

      <OneFact>{text}</OneFact>
    </FactElement>
  );
};
