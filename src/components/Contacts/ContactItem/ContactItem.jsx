import arrow from '../../../images/arrowContact.svg';
import { Description, Link, Title } from './ContactItem.styled';


export const ContactItem = ({ social, text, link }) => {
  return (
    <>
      <Title>{social}</Title>
      <Description>{text}</Description>
      <Link href={link} target="_blank" rel="noreferrer noopener">
        <img src={arrow} alt={social} />
      </Link>
    </>
  );
};
