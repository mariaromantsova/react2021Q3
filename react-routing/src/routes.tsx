import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';

const routes = [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/about', name: 'About', Component: AboutPage },
];

export default routes;
