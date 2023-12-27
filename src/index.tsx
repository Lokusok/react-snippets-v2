import ReactDOM from 'react-dom/client';
import App from './app/';

import 'reset-css';
import './index.scss';
import './vars.scss';

import { BrowserRouter } from 'react-router-dom';

const rootDom = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootDom);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

