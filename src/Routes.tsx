import { lazy, Suspense } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './contexts/search/search.provider';
import { LanguageProvider } from './contexts/language/language.provider';
import RouteLayout from './layouts/RouteLayout';
const Home = lazy(() => import('./pages/Home/Home'));

const Routes: React.FC = () => {
   return (
      <SearchProvider query="">
         <LanguageProvider userLanguage="en">
            <BrowserRouter>
               <RouteLayout>
                  <Suspense fallback={<div />}>
                     <Route path="/" component={Home} />
                  </Suspense>
               </RouteLayout>
            </BrowserRouter>
         </LanguageProvider>
      </SearchProvider>
   );
};

export default Routes;
