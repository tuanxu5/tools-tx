import { Clock, Target, TrendingUp, Users } from "lucide-react";
import ChartPlaceholder from "../components/ChartPlaceholder";
import StatCard from "../components/StatCard";
import DashboardLayout from "../layouts/DashboardLayout";

const stats = [
  { title: "Tỷ lệ chuyển đổi", value: "3.24%", change: "+0.8%", changeType: "up", icon: TrendingUp, color: "emerald" },
  { title: "Người dùng hoạt động", value: "8,432", change: "+15.3%", changeType: "up", icon: Users, color: "blue" },
  { title: "Thời gian trung bình", value: "4m 32s", change: "+12.1%", changeType: "up", icon: Clock, color: "purple" },
  { title: "Mục tiêu đạt được", value: "78%", change: "-2.4%", changeType: "down", icon: Target, color: "orange" },
];

export default function Analytics() {
  return (
    <DashboardLayout title="Analytics">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartPlaceholder title="Lưu lượng truy cập" />
        <ChartPlaceholder title="Nguồn traffic" />
      </div>

      {/* Data Table Placeholder */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Chi tiết Analytics</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Trang</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Lượt xem</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Thời gian TB</th>
                <th className="text-left py-3 px-4 bg-red-500 text-sm font-semibold text-slate-600">Bounce Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                { page: "/dashboard", views: "12,456", time: "3m 24s", bounce: "32%" },
                { page: "/products", views: "8,234", time: "4m 12s", bounce: "28%" },
                { page: "/checkout", views: "5,678", time: "2m 45s", bounce: "45%" },
                { page: "/blog", views: "4,321", time: "5m 30s", bounce: "22%" },
              ].map((row, index) => (
                <tr key={index} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-slate-700 font-medium">{row.page}</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{row.views}</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{row.time}</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{row.bounce}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
