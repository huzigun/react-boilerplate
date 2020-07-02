import NoticePage from './pages/notice';
import MainPage from './pages';
import ChannelPage from './pages/channel';

// var BASEDIR = process.env.BASE_DIR;

const routes = [
  { path: '/', name: 'main', exact: true, component: MainPage },
  { path: '/channel', name: '채널', component: ChannelPage },
  { path: '/notice', name: '공지사항', component: NoticePage },
];

export default routes;
