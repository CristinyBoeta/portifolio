import { createBrowserRouter } from 'react-router-dom';
import Contact from '../feature/contact/pages';
import Home from '../feature/home/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/contato',
    element: <Contact />,
  },
]);

export default router;
