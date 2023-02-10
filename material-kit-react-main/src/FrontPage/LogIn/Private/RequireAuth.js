import { Navigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const currentUser = localStorage.getItem('ERPdata');
  return currentUser ? children : <Navigate to="/" replace />;
}
