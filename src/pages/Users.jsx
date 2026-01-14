import { Plus, Search, MoreVertical, Mail, Phone } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';

const users = [
  { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@email.com', role: 'Admin', status: 'Hoạt động', avatar: 'Felix' },
  { id: 2, name: 'Trần Thị B', email: 'tranthib@email.com', role: 'Editor', status: 'Hoạt động', avatar: 'Aneka' },
  { id: 3, name: 'Lê Văn C', email: 'levanc@email.com', role: 'Viewer', status: 'Không hoạt động', avatar: 'Milo' },
  { id: 4, name: 'Phạm Thị D', email: 'phamthid@email.com', role: 'Editor', status: 'Hoạt động', avatar: 'Zoe' },
  { id: 5, name: 'Hoàng Văn E', email: 'hoangvane@email.com', role: 'Admin', status: 'Hoạt động', avatar: 'Leo' },
  { id: 6, name: 'Đỗ Thị F', email: 'dothif@email.com', role: 'Viewer', status: 'Chờ duyệt', avatar: 'Sara' },
];

const statusColors = {
  'Hoạt động': 'bg-emerald-100 text-emerald-700',
  'Không hoạt động': 'bg-slate-100 text-slate-600',
  'Chờ duyệt': 'bg-orange-100 text-orange-700',
};

const roleColors = {
  'Admin': 'bg-purple-100 text-purple-700',
  'Editor': 'bg-blue-100 text-blue-700',
  'Viewer': 'bg-slate-100 text-slate-600',
};

export default function Users() {
  return (
    <DashboardLayout title="Users">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm kiếm người dùng..."
            className="w-80 pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors duration-200 shadow-lg shadow-emerald-600/30">
          <Plus className="w-5 h-5" />
          <span>Thêm User</span>
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Người dùng</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Vai trò</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Trạng thái</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Liên hệ</th>
              <th className="text-right py-4 px-6 text-sm font-semibold text-slate-600"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`}
                      alt={user.name}
                      className="w-10 h-10 rounded-full bg-emerald-100"
                    />
                    <div>
                      <p className="text-sm font-medium text-slate-700">{user.name}</p>
                      <p className="text-xs text-slate-400">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${roleColors[user.role]}`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[user.status]}`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Mail className="w-4 h-4 text-slate-400" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Phone className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5 text-slate-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
