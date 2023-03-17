import { Box } from 'components/Box';
import { HeaderLink, HeaderList, HeaderListItem, Logo } from './Header.styled';
import { MainPageHeader } from './MobileHeaderMenu/MobileMenu';
import navigationList from './navigationList';

export const Header = () => {
  return (
    <Box as="header" borderBottom="1px dotted #422F56">
      <MainPageHeader />
      <Box
        display={['none', 'flex', 'flex']}
        justifyContent="center"
        alignItems="center"
        maxWidth={['400px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <Logo href="/">Dari.Karma</Logo>
        <Box as="nav">
          <HeaderList>
            {navigationList.map(({ name, href }) => (
              <HeaderListItem key={name}>
                <HeaderLink href={href}>{name}</HeaderLink>
              </HeaderListItem>
            ))}
          </HeaderList>
        </Box>
      </Box>
    </Box>
  );
};
