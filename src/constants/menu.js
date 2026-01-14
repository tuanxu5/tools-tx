import {
  LayoutDashboard,
  BarChart3,
  FolderKanban,
  Users,
  FileText,
  Settings,
  Bell,
  HelpCircle,
  Archive,
  UserCog,
  Shield,
  TrendingUp,
  PieChart,
} from 'lucide-react';

export const menuItems = [
  {
    id: 'dashboard',
    label: 'Trang chủ',
    icon: LayoutDashboard,
    path: '/',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    path: '/analytics',
    children: [
      { id: 'analytics-overview', label: 'Tổng quan', icon: TrendingUp, path: '/analytics' },
      { id: 'analytics-reports', label: 'Báo cáo chi tiết', icon: PieChart, path: '/analytics/reports' },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: FolderKanban,
    path: '/projects',
    children: [
      { id: 'projects-all', label: 'Tất cả Projects', icon: FolderKanban, path: '/projects' },
      { id: 'projects-archived', label: 'Đã lưu trữ', icon: Archive, path: '/projects/archived' },
    ],
  },
  {
    id: 'users',
    label: 'Users',
    icon: Users,
    path: '/users',
    children: [
      { id: 'users-list', label: 'Danh sách', icon: Users, path: '/users' },
      { id: 'users-roles', label: 'Phân quyền', icon: UserCog, path: '/users/roles' },
      { id: 'users-permissions', label: 'Quyền hạn', icon: Shield, path: '/users/permissions' },
    ],
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: FileText,
    path: '/reports',
  },
];

export const bottomMenuItems = [
  {
    id: 'notifications',
    label: 'Thông báo',
    icon: Bell,
    path: '/notifications',
  },
  {
    id: 'help',
    label: 'Trợ giúp',
    icon: HelpCircle,
    path: '/help',
  },
  {
    id: 'settings',
    label: 'Cài đặt',
    icon: Settings,
    path: '/settings',
  },
];
