import { ConcultationCardElement, ConcultationCardText } from './ConsultationCard.styled';

export const ConsultaionCard = ({ img, text }) => {
  return (
    <ConcultationCardElement>
      <picture>
        <source srcSet={img} />
        <img src={img} alt="consultation card" />
        <ConcultationCardText>{text}</ConcultationCardText>
      </picture>
    </ConcultationCardElement>
  );
};
