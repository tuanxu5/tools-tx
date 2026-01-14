import { Users, DollarSign, ShoppingCart, Eye } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import ChartPlaceholder from '../components/ChartPlaceholder';

const stats = [
  { title: 'Tổng người dùng', value: '12,847', change: '+12.5%', changeType: 'up', icon: Users, color: 'emerald' },
  { title: 'Doanh thu', value: '₫847M', change: '+8.2%', changeType: 'up', icon: DollarSign, color: 'blue' },
  { title: 'Đơn hàng', value: '2,456', change: '-3.1%', changeType: 'down', icon: ShoppingCart, color: 'purple' },
  { title: 'Lượt truy cập', value: '89,234', change: '+24.3%', changeType: 'up', icon: Eye, color: 'orange' },
];

const recentActivities = [
  { id: 1, user: 'Nguyễn Văn B', action: 'đã tạo project mới', time: '5 phút trước', avatar: 'Felix' },
  { id: 2, user: 'Trần Thị C', action: 'đã cập nhật báo cáo', time: '12 phút trước', avatar: 'Aneka' },
  { id: 3, user: 'Lê Văn D', action: 'đã thêm 3 thành viên', time: '1 giờ trước', avatar: 'Milo' },
  { id: 4, user: 'Phạm Thị E', action: 'đã hoàn thành task', time: '2 giờ trước', avatar: 'Zoe' },
];

const topProjects = [
  { name: 'E-commerce Platform', progress: 85, color: '#10b981' },
  { name: 'Mobile App', progress: 72, color: '#3b82f6' },
  { name: 'Analytics Dashboard', progress: 64, color: '#8b5cf6' },
  { name: 'API Integration', progress: 45, color: '#f97316' },
];

export default function Dashboard() {
  return (
    <DashboardLayout title="Trang chủ">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">
        <div className="xl:col-span-2">
          <ChartPlaceholder title="Doanh thu theo tháng" height="h-64 lg:h-72" />
        </div>
        <ChartPlaceholder title="Phân bố người dùng" height="h-64 lg:h-72" />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl p-4 lg:p-5 border border-slate-100">
          <h3 className="text-base font-semibold text-slate-800 mb-4">Hoạt động gần đây</h3>
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.avatar}`}
                  alt={activity.user}
                  className="w-9 h-9 rounded-full bg-emerald-100 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-700 truncate">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-slate-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Projects */}
        <div className="bg-white rounded-xl p-4 lg:p-5 border border-slate-100">
          <h3 className="text-base font-semibold text-slate-800 mb-4">Top Projects</h3>
          <div className="space-y-4">
            {topProjects.map((project, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-slate-700">{project.name}</span>
                  <span className="text-sm text-slate-500">{project.progress}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%`, backgroundColor: project.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
