import App from './App';
import HomePage from './Homepage';
import About from './About';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'home-page',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
];

export default routes;
