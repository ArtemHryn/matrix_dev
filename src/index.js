import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/theme.jsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'components/Global';
import 'i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
