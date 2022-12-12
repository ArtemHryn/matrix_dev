import { Box } from 'components/Box';
import { HeaderLink, HeaderList, HeaderListItem, Logo } from './Header.styled';

export const Header = () => {
  return (
    <Box as="header" m="0 auto">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt='44px'
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
