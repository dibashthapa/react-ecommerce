import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily: 'Lato, sans-serif',
            },
        },
    },
});

export default theme;
