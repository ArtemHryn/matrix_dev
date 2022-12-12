import { Container } from 'components/Container/Container';
import { ContactItem } from './ContactItem/ContactItem';
import { ContactEl, ContactList, Title } from './Contacts.styled';

const text = {
  desc: {
    instagram:
      'Подарки, информационные прямые эфиры, разборы ваших запросов, практики, бонусы.',
    tiktok:
      'Прямые эфиры с разборами ваших матриц, фишки по работе с матрицей, жизненные и весёлые видео о энергиях.',
    telegram:
      'Поиск кармического партнера для достижения своих целей, обсуждения нюансов матрицы в чате с единомышленниками.',
  },
  link: {
    instagram: 'https://instagram.com/dari.karma?igshid=YmMyMTA2M2Y=',
    tiktok: 'https://www.tiktok.com/@dari.karma',
    telegram: 'https://t.me/+eAczkWqkslIzMjky',
  },
};

export const Contacts = () => {
  return (
    <Container
      ps="90px 15px 0"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      p='0 115px'
    >
      <Title>Контакты</Title>
      <ContactList>
        <ContactEl>
          <ContactItem
            social="Instagram"
            text={text.desc.instagram}
            link={text.link.instagram}
          />
        </ContactEl>
        <ContactEl>
          <ContactItem
            social="TikTok"
            text={text.desc.tiktok}
            link={text.link.tiktok}
          />
        </ContactEl>
        <ContactEl>
          <ContactItem
            social="Telegram"
            text={text.desc.telegram}
            link={text.link.telegram}
          />
        </ContactEl>
      </ContactList>
    </Container>
  );
};
