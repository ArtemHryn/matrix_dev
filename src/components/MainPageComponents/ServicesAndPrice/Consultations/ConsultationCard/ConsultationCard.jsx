import { ConcultationCardElement, ConcultationCardText } from './ConsultationCard.styled';

export const ConsultaionCard = ({ img, text, imgtab }) => {
  return (
    <ConcultationCardElement>
      <picture>
        <source srcSet={imgtab} media="(min-width: 768px)" />
        <source srcSet={img} />
        <img src={img} alt="consultation card" />
        <ConcultationCardText>{text}</ConcultationCardText>
      </picture>
    </ConcultationCardElement>
  );
};
