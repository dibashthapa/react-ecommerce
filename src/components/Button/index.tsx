import React, { ReactNode } from 'react';
import { useColorModeValue, Button as ChakraButton } from '@chakra-ui/react';
const Button: React.FC<{ children: ReactNode }> = ({ children }) => {
    const scheme = 'green';
    const step2 = useColorModeValue('500', '400');
    const step3 = useColorModeValue('300', '500');

    return (
        <ChakraButton
            backgroundColor="rgb(0, 158, 127)"
            color="white"
            fontWeight="700"
            shadow="base"
            size={'sm'}
            rounded={'none'}
            _focus={{
                outline: 'none',
            }}
            fontFamily="Lato , sans-serif"
            transition="background 0.8s"
            backgroundPosition="center"
            _hover={{
                bgColor: `${scheme}.${step2}`,
                bgGradient: `radial(circle, transparent 1%, ${scheme}.${step2} 1%)`,
                bgPos: 'center',
                backgroundSize: '15000%',
            }}
            _active={{
                bgColor: `${scheme}.${step3}`,
                backgroundSize: '100%',
                transition: 'background 0s',
            }}
            height="48px"
            margin="0px"
            border="0px"
            flexShrink={0}
            cursor="pointer"
            outline="0px"
            paddingLeft="30px"
            paddingRight="30px"
        >
            {children}
        </ChakraButton>
    );
};

export default Button;
