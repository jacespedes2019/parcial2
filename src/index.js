import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import { IntlProvider } from 'react-intl';

const root = ReactDOM.createRoot(document.getElementById('root'));
// get browser language without the region code
//const language = navigator.language.split(/[-_]/)[0];
const language="en"

const messages = {
  'en': localeEnMessages,
  'es': localeEsMessages
};
root.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <React.StrictMode>
      <App language={language} />
    </React.StrictMode>
  </IntlProvider>

);
