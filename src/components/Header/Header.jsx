import { Box } from 'components/Box';
import { HeaderLink, HeaderList, HeaderListItem, Logo } from './Header.styled';
import { MainPageHeader } from './MainPageHeader/MainPageHeader';

export const Header = ({ isMain }) => {

  return (
    <Box
      as="header"
      backgroundImage="linear-gradient(0deg, rgba(236,229,255,0.92) 45%, rgba(236,229,255,0.9) 92%);"
      borderBottom="1px dotted #422F56"
    >
      <MainPageHeader />
      <Box
        display={['none', 'flex', 'flex']}
        justifyContent="center"
        alignItems="center"
        pt="44px"
      >
        <Logo href="/">Dari.Karma</Logo>
        <Box as="nav">
          <HeaderList>
            <HeaderListItem>
              <HeaderLink href="/">Главная</HeaderLink>
            </HeaderListItem>
            <HeaderListItem>
              <HeaderLink href="#consultation">
                Запись на консультацию
              </HeaderLink>
            </HeaderListItem>
            <HeaderListItem>
              <HeaderLink href="#contacts">Контакти</HeaderLink>
            </HeaderListItem>
          </HeaderList>
        </Box>
      </Box>
    </Box>
  );
};
