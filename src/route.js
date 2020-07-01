import NoticePage from './pages/notice';
import MainPage from './pages';
import ChannelPage from './pages/channel';

// var BASEDIR = process.env.BASE_DIR;

const routes = [
  { path: '/', name: 'main', exact: true, component: MainPage },
  { path: '/channel', name: 'channel', component: ChannelPage },
  { path: '/notice', name: 'notice', component: NoticePage },
];

export default routes;
