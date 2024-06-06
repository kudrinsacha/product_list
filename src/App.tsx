import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@/store';
import { Router } from '@/router';
import { Loading } from '@/components';

import './index.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading load />}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};
