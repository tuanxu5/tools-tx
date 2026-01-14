import { Download, Filter, Calendar } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';
import ChartPlaceholder from '../components/ChartPlaceholder';

const reports = [
  { id: 1, name: 'Báo cáo doanh thu Q4/2025', type: 'Tài chính', date: '01/01/2026', status: 'Hoàn thành' },
  { id: 2, name: 'Phân tích người dùng tháng 12', type: 'Analytics', date: '28/12/2025', status: 'Hoàn thành' },
  { id: 3, name: 'Báo cáo hiệu suất hệ thống', type: 'Kỹ thuật', date: '15/01/2026', status: 'Đang xử lý' },
  { id: 4, name: 'Tổng kết năm 2025', type: 'Tổng hợp', date: '05/01/2026', status: 'Hoàn thành' },
  { id: 5, name: 'Dự báo Q1/2026', type: 'Tài chính', date: '10/01/2026', status: 'Chờ duyệt' },
];

const statusColors = {
  'Hoàn thành': 'bg-emerald-100 text-emerald-700',
  'Đang xử lý': 'bg-blue-100 text-blue-700',
  'Chờ duyệt': 'bg-orange-100 text-orange-700',
};

export default function Reports() {
  return (
    <DashboardLayout title="Reports">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600">Lọc</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600">Thời gian</span>
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors duration-200 shadow-lg shadow-emerald-600/30">
          <Download className="w-5 h-5" />
          <span>Xuất báo cáo</span>
        </button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartPlaceholder title="Tổng quan doanh thu" />
        <ChartPlaceholder title="So sánh theo kỳ" />
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800">Danh sách báo cáo</h3>
        </div>
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Tên báo cáo</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Loại</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Ngày tạo</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-slate-600">Trạng thái</th>
              <th className="text-right py-4 px-6 text-sm font-semibold text-slate-600">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6">
                  <p className="text-sm font-medium text-slate-700">{report.name}</p>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-slate-600">{report.type}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-slate-500">{report.date}</span>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[report.status]}`}>
                    {report.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="p-2 hover:bg-emerald-50 rounded-lg transition-colors group">
                    <Download className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" />
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
