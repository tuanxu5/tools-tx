import { Plus, MoreVertical, Calendar, Users } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';

const projects = [
  { id: 1, name: 'E-commerce Platform', status: 'Đang thực hiện', progress: 75, members: 5, deadline: '15/02/2026', color: 'emerald' },
  { id: 2, name: 'Mobile Application', status: 'Đang thực hiện', progress: 45, members: 3, deadline: '28/02/2026', color: 'blue' },
  { id: 3, name: 'Analytics Dashboard', status: 'Review', progress: 90, members: 4, deadline: '10/01/2026', color: 'purple' },
  { id: 4, name: 'API Integration', status: 'Chờ duyệt', progress: 30, members: 2, deadline: '20/03/2026', color: 'orange' },
  { id: 5, name: 'CRM System', status: 'Đang thực hiện', progress: 60, members: 6, deadline: '05/04/2026', color: 'emerald' },
  { id: 6, name: 'Payment Gateway', status: 'Hoàn thành', progress: 100, members: 3, deadline: '01/01/2026', color: 'blue' },
];

const statusColors = {
  'Đang thực hiện': 'bg-emerald-100 text-emerald-700',
  'Review': 'bg-purple-100 text-purple-700',
  'Chờ duyệt': 'bg-orange-100 text-orange-700',
  'Hoàn thành': 'bg-blue-100 text-blue-700',
};

export default function Projects() {
  return (
    <DashboardLayout title="Projects">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-slate-500">Quản lý tất cả các dự án của bạn</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors duration-200 shadow-lg shadow-emerald-600/30">
          <Plus className="w-5 h-5" />
          <span>Tạo Project</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: project.color === 'emerald' ? '#10b981' : project.color === 'blue' ? '#3b82f6' : project.color === 'purple' ? '#8b5cf6' : '#f97316' }} />
              <button className="p-1 hover:bg-slate-100 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-2">{project.name}</h3>
            
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
              {project.status}
            </span>

            {/* Progress */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-500">Tiến độ</span>
                <span className="text-sm font-medium text-slate-700">{project.progress}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${project.progress}%`, backgroundColor: project.color === 'emerald' ? '#10b981' : project.color === 'blue' ? '#3b82f6' : project.color === 'purple' ? '#8b5cf6' : '#f97316' }}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1 text-slate-500">
                <Users className="w-4 h-4" />
                <span className="text-sm">{project.members}</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{project.deadline}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
