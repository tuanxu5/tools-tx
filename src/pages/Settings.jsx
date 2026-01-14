import { Bell, Database, Globe, Palette, Shield, User } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const settingsSections = [
  {
    id: "profile",
    title: "Hồ sơ cá nhân",
    description: "Quản lý thông tin cá nhân và tài khoản",
    icon: User,
    color: "emerald",
  },
  {
    id: "notifications",
    title: "Thông báo",
    description: "Cấu hình email và push notifications",
    icon: Bell,
    color: "blue",
  },
  {
    id: "security",
    title: "Bảo mật",
    description: "Mật khẩu, 2FA và phiên đăng nhập",
    icon: Shield,
    color: "purple",
  },
  {
    id: "appearance",
    title: "Giao diện",
    description: "Theme, màu sắc và hiển thị",
    icon: Palette,
    color: "orange",
  },
  {
    id: "language",
    title: "Ngôn ngữ & Vùng",
    description: "Ngôn ngữ, múi giờ và định dạng",
    icon: Globe,
    color: "emerald",
  },
  {
    id: "data",
    title: "Dữ liệu",
    description: "Xuất, nhập và xóa dữ liệu",
    icon: Database,
    color: "blue",
  },
];

const colorClasses = {
  emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
  blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
  purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-100",
  orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-100",
};

export default function Settings() {
  return (
    <DashboardLayout title="Cài đặt">
      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              className="group bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 text-left"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  colorClasses[section.color]
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">{section.title}</h3>
              <p className="text-sm text-slate-500">{section.description}</p>
            </button>
          );
        })}
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800">Thông tin cá nhân</h3>
        </div>
        <div className="p-6">
          <div className="flex items-start gap-6 mb-8">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="Avatar"
              className="w-24 h-24 rounded-2xl bg-emerald-100"
            />
            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-1">Nguyễn Văn A</h4>
              <p className="text-slate-500 mb-4">Admin • Tham gia từ 01/2024</p>
              <button className="px-4 py-2 bg-emerald-600 text-white text-sm rounded-xl hover:bg-emerald-700 transition-colors">
                Đổi ảnh đại diện
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Họ và tên</label>
              <input
                type="text"
                defaultValue="Nguyễn Văn A"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue="nguyenvana@email.com"
                className="w-full p-3 bg-red-400 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Số điện thoại</label>
              <input
                type="tel"
                defaultValue="0912 345 678"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Vị trí</label>
              <input
                type="text"
                defaultValue="Hà Nội, Việt Nam"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-slate-100">
            <button className="px-6 py-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">Hủy</button>
            <button className="px-6 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/30">
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
