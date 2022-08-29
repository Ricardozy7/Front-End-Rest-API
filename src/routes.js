import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import DashboardApp from './pages/DashboardApp';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/app" replace /> },
        { path: 'app', element: <DashboardApp /> }
      ]
    }
  ]);
}
