import Home from './components/Home';
import CreateCard from './components/CreateCard';
import AllCards from './components/AllCards';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/create', component: <CreateCard /> },
  { path: '/all', component: <AllCards /> },
];

export default routes;