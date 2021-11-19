import Dashboard from '../Views/Dashboard/index';
import User from '../Views/User';
import Messages from '../Views/Messages';
import Analytics from '../Views/Analytics';
import FileManager from '../Views/FileManager';
import Order from '../Views/Order';
import Saved from '../Views/Saved';
import Settings from '../Views/Settings';

type route = {
  path: string;
  Element: any;
  name: string;
  className: string;
};

const Routes: route[] = [
  {
    path: '/Dashboard',
    Element: Dashboard,
    name: 'Dashboard',
    className: 'bx bx-grid-alt',
  },
  {
    path: '/User',
    Element: User,
    name: 'User',
    className: 'bx bxs-user',
  },
  {
    path: '/Messages',
    Element: Messages,
    name: 'Messages',
    className: 'bx bx-chat',
  },
  {
    path: '/Analytics',
    Element: Analytics,
    name: 'Analytics',
    className: 'bx bx-pie-chart-alt-2',
  },
  {
    path: '/File_Manager',
    Element: FileManager,
    name: 'File Manager',
    className: 'bx bx-folder',
  },
  {
    path: '/Order',
    Element: Order,
    name: 'Order',
    className: 'bx bx-cart-alt',
  },
  {
    path: '/Saved',
    Element: Saved,
    name: 'Saved',
    className: 'bx bx-heart',
  },
  {
    path: '/Settings',
    Element: Settings,
    name: 'Settings',
    className: 'bx bx-cog',
  },
];

export default Routes;
