import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import AdvancedERP from './FrontPage/AdvancedERP/AdvancedERP';
import Dashboard from './layouts/dashboard';
import Registration from './FrontPage/LogIn/Registration';
import Login from './FrontPage/LogIn/Login';
import RequireAuth from './FrontPage/LogIn/Private/RequireAuth';
import DashboardAppPage from './pages/DashboardAppPage';
import UserPage from './pages/UserPage';
import ProductsPage from './pages/ProductsPage';
import BlogPage from './pages/BlogPage';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      {/* <AdvancedERP /> */}
      <Routes>
        <Route path="/" element={<AdvancedERP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="app" element={<DashboardAppPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </HelmetProvider>
);

serviceWorker.unregister();

reportWebVitals();
