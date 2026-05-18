import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Login } from '../pages/Auth/Login.jsx';

export const medicalRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);