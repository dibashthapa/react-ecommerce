import { useEffect, useState } from 'react';
import { Box, Text, Grid } from '@chakra-ui/react';
import { List, ListItem, Button, chakra } from '@chakra-ui/react';
import FormModal from '../FormModal';
import styled from 'styled-components';

interface Navprops {
    position: 'fixed' | 'static';
}

const Nav = styled.nav`
    background-color: #fff;
    padding: 10px 0px;
    position: ${(props: Navprops) =>
        props.position === 'fixed' ? 'fixed' : 'static'};
`;
const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    //const [position, setPosition] = useState<'static' | 'fixed'>('static');

    //useEffect(() => {
    //    window.addEventListener('scroll', handleScroll);

    //    return () => {
    //        window.removeEventListener('scroll', handleScroll);
    //    };
    //});

    //const handleScroll = () => {
    //    const scrollBottom = window.scrollY;
    //    if (scrollBottom >= 200) {
    //        setPosition('fixed');
    //    } else {
    //        setPosition('static');
    //    }
    //};
    return (
        <Nav position={'static'}>
            <FormModal isOpen={open} onClose={() => setOpen(false)} />
            <Grid gridTemplateColumns="auto 1fr" margin="0 10%">
                <Box>
                    <Text
                        display="flex"
                        alignItems="center"
                        fontSize="20px"
                        fontWeight="bold"
                    >
                        PickBazar
                    </Text>
                </Box>
                <Box width="100%" display="flex" justifyContent="flex-end">
                    <List display="flex" width="xs" alignItems="center">
                        <ListItem px="4">English</ListItem>
                        <Button
                            colorScheme="green"
                            border="none"
                            onClick={() => setOpen(true)}
                        >
                            Join
                        </Button>
                    </List>
                </Box>
            </Grid>
        </Nav>
    );
};

export default Navbar;
