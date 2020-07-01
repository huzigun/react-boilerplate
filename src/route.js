import NoticePage from './pages/notice';
import MainPage from './pages';
import ChannelPage from './pages/channel';

// var BASEDIR = process.env.BASE_DIR;

const routes = [
  { path: '/', name: 'Login', component: MainPage },
  { path: '/channel', name: 'Login', component: ChannelPage },
  { path: '/notice', name: 'Login', component: NoticePage },
];

export default routes;
