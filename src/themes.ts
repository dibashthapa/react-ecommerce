import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
   sm: '320px',
   md: '768px',
   lg: '960px',
   xl: '1200px',
});
const theme = extendTheme({
   fonts: {
      body: 'Lato , sans-serif',
   },
   ...breakpoints,
});
export default theme;
