import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/theme.jsx';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from 'components/Global';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter >
        <GlobalStyle />
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
