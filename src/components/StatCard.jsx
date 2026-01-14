import { TrendingUp, TrendingDown } from 'lucide-react';

const colorClasses = {
  emerald: 'bg-emerald-50 text-emerald-600',
  blue: 'bg-blue-50 text-blue-600',
  purple: 'bg-purple-50 text-purple-600',
  orange: 'bg-orange-50 text-orange-600',
};

export default function StatCard({ title, value, change, changeType, icon: Icon, color }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-100 hover:shadow-md hover:shadow-slate-200/50 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-slate-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-slate-800">{value}</p>
          <div className="flex items-center gap-1 mt-2">
            {changeType === 'up' ? (
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <TrendingDown className="w-3.5 h-3.5 text-red-500" />
            )}
            <span className={`text-xs font-medium ${changeType === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
              {change}
            </span>
            <span className="text-xs text-slate-400">so với tháng trước</span>
          </div>
        </div>
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClasses[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
