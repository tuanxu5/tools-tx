import { Search, Book, MessageCircle, Video, FileText, ExternalLink } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';

const helpCategories = [
  { id: 1, title: 'Bắt đầu', description: 'Hướng dẫn cơ bản cho người mới', icon: Book, articles: 12, color: 'emerald' },
  { id: 2, title: 'Tài khoản', description: 'Quản lý tài khoản và bảo mật', icon: FileText, articles: 8, color: 'blue' },
  { id: 3, title: 'Tính năng', description: 'Khám phá các tính năng nâng cao', icon: Video, articles: 15, color: 'purple' },
  { id: 4, title: 'Hỗ trợ', description: 'Liên hệ đội ngũ hỗ trợ', icon: MessageCircle, articles: 5, color: 'orange' },
];

const popularArticles = [
  { id: 1, title: 'Cách tạo project mới', views: '2.4k' },
  { id: 2, title: 'Quản lý thành viên trong team', views: '1.8k' },
  { id: 3, title: 'Thiết lập thông báo email', views: '1.5k' },
  { id: 4, title: 'Xuất báo cáo PDF', views: '1.2k' },
  { id: 5, title: 'Tích hợp với các công cụ khác', views: '980' },
];

const colorClasses = {
  emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100',
  blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
  purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-100',
  orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-100',
};

export default function Help() {
  return (
    <DashboardLayout title="Trợ giúp">
      {/* Search */}
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Bạn cần hỗ trợ gì?</h2>
        <p className="text-emerald-100 mb-6">Tìm kiếm trong hàng trăm bài viết hướng dẫn</p>
        <div className="relative max-w-xl">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm..."
            className="w-full pl-12 pr-4 py-4 bg-white rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {helpCategories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              className="group bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 text-left"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${colorClasses[category.color]}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">{category.title}</h3>
              <p className="text-sm text-slate-500 mb-3">{category.description}</p>
              <span className="text-xs text-emerald-600 font-medium">{category.articles} bài viết</span>
            </button>
          );
        })}
      </div>

      {/* Popular Articles */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800">Bài viết phổ biến</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {popularArticles.map((article) => (
            <button
              key={article.id}
              className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors group"
            >
              <span className="text-sm text-slate-700 group-hover:text-emerald-600 transition-colors">
                {article.title}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">{article.views} lượt xem</span>
                <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
