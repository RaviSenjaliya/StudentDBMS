import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import AdvancedERP from './FrontPage/AdvancedERP/AdvancedERP';
import Login from './Login/Login';
import ApiPost from './Login/Login';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    {/* <AdvancedERP /> */}
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <ApiPost />
  </HelmetProvider>
);

serviceWorker.unregister();

reportWebVitals();
