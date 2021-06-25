import { ThemeProvider } from '@chakra-ui/react';
import Routes from './Routes';
import './App.css';
import theme from './themes';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './store';
const client = new ApolloClient({
   uri: 'https://pickbazar-api-redq.vercel.app/shop/graphql',
   cache: new InMemoryCache(),
});

const App: React.FC = () => {
   return (
      <ThemeProvider theme={theme}>
         <ApolloProvider client={client}>
            <Provider store={store}>
               <Routes />
            </Provider>
         </ApolloProvider>
      </ThemeProvider>
   );
};

export default App;
