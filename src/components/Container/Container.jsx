import { Box } from 'components/Box';

export const Container = ({ children, ps, ...props }) => {
  return (
    <Box as="section" p={ps}>
      <Box m='0 auto' {...props} width="1440px">
        {children}
      </Box>
    </Box>
  );
};
