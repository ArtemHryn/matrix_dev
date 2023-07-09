import { Box } from 'components/Box';
import { HeaderLink, HeaderList, HeaderListItem, Logo } from './Header.styled';
import { MainPageHeader } from './MobileHeaderMenu/MobileMenu';
import SwitchLanguage from './SwitchLanguage/SwitchLanguage';

export const Header = ({ navigationList }) => {
  return (
    <Box
      as="header"
      backgroundImage="linear-gradient(
    to right,
    #9072af 10%,
    rgba(255, 255, 255, 0) 0%
  );"
      backgroundPosition="bottom"
      backgroundSize="15px 2px"
      backgroundRepeat="repeat-x"
      position='relative'
      zIndex='100'
    >
      <MainPageHeader navigationList={navigationList} />
      <Box
        display={['none', 'flex', 'flex']}
        justifyContent="center"
        alignItems="center"
        maxWidth={['400px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
        as='nav'
      >
        <Logo href="/">Dari.Karma</Logo>
        <Box as="nav" display="flex" alignItems="center">
          <HeaderList>
            {navigationList.map(({ name, href }) => (
              <HeaderListItem key={name}>
                <HeaderLink href={href}>{name}</HeaderLink>
              </HeaderListItem>
            ))}
          </HeaderList>
          <SwitchLanguage />
        </Box>
      </Box>
    </Box>
  );
};
