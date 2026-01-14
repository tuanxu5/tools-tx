import { Check, X, Bell, MessageSquare, UserPlus, AlertCircle } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';

const notifications = [
  { id: 1, type: 'message', title: 'Tin nhắn mới từ Trần Thị B', description: 'Bạn có thể review PR #234 được không?', time: '5 phút trước', read: false },
  { id: 2, type: 'user', title: 'Thành viên mới tham gia', description: 'Lê Văn C đã tham gia team Development', time: '1 giờ trước', read: false },
  { id: 3, type: 'alert', title: 'Cảnh báo hệ thống', description: 'CPU usage đạt 85% trong 10 phút qua', time: '2 giờ trước', read: true },
  { id: 4, type: 'message', title: 'Comment mới trong task', description: 'Phạm Thị D đã comment vào "Fix login bug"', time: '3 giờ trước', read: true },
  { id: 5, type: 'user', title: 'Yêu cầu truy cập', description: 'Hoàng Văn E yêu cầu quyền Admin', time: '5 giờ trước', read: true },
];

const iconMap = {
  message: MessageSquare,
  user: UserPlus,
  alert: AlertCircle,
};

const colorMap = {
  message: 'bg-blue-100 text-blue-600',
  user: 'bg-emerald-100 text-emerald-600',
  alert: 'bg-orange-100 text-orange-600',
};

export default function Notifications() {
  return (
    <DashboardLayout title="Thông báo">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            2 chưa đọc
          </span>
        </div>
        <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
          Đánh dấu tất cả đã đọc
        </button>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        {notifications.map((notification, index) => {
          const Icon = iconMap[notification.type];
          return (
            <div
              key={notification.id}
              className={`flex items-start gap-4 p-6 hover:bg-slate-50 transition-colors ${
                index !== notifications.length - 1 ? 'border-b border-slate-100' : ''
              } ${!notification.read ? 'bg-emerald-50/30' : ''}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[notification.type]}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={`text-sm ${!notification.read ? 'font-semibold text-slate-800' : 'font-medium text-slate-700'}`}>
                      {notification.title}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">{notification.description}</p>
                    <p className="text-xs text-slate-400 mt-2">{notification.time}</p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2"></div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 hover:bg-emerald-100 rounded-lg transition-colors group">
                  <Check className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" />
                </button>
                <button className="p-2 hover:bg-red-100 rounded-lg transition-colors group">
                  <X className="w-4 h-4 text-slate-400 group-hover:text-red-600" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
