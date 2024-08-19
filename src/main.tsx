import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import client from './services/apolloClient';
import './index.css'

import { Provider } from 'react-redux';
import store from './redux/store.ts';
import { ApolloProvider } from '@apollo/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </StrictMode>,
)
