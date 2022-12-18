import { Box } from 'components/Box';
import { Element, Key, List, Title } from './OtherAssign.styled';

export const OtherAssign = ({ children, first, second, result }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      border="1px solid #72499B"
      borderRadius="19px"
      p="15px 25px"
      width="385px"
    >
      <Title>{children}</Title>
      <List>
        <Element>
          <Key>{first}</Key>
        </Element>
        <Element>
          <Key>{second}</Key>
        </Element>
        <Element>
          <Key>{result}</Key>
        </Element>
      </List>
    </Box>
  );
};
