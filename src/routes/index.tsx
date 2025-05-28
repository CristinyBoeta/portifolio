import { createBrowserRouter } from 'react-router-dom';
import Home from '../feature/pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default router;
