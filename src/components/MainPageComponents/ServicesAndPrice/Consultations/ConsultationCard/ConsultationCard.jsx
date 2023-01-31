import {
  ConcultationCardElement,
  ConcultationCardText,
} from './ConsultationCard.styled';

export const ConsultaionCard = ({ img, text, imgtab, imgDesc }) => {
  return (
    <ConcultationCardElement>
      <picture>
        <source srcSet={imgDesc} media="(min-width: 1440px)" />
        <source srcSet={imgtab} media="(min-width: 768px)" />
        <source srcSet={img} />
        <img src={img} alt="consultation card" />
        <ConcultationCardText>{text}</ConcultationCardText>
      </picture>
    </ConcultationCardElement>
  );
};
