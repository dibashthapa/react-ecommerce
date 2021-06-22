import { ThemeProvider, theme } from '@chakra-ui/react';
import Routes from './Routes';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://pickbazar-api-redq.vercel.app/shop/graphql',
    cache: new InMemoryCache(),
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <Routes />
            </ApolloProvider>
        </ThemeProvider>
    );
};

export default App;
