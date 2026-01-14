export default function ChartPlaceholder({ title, height = 'h-72' }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-100 h-full">
      <h3 className="text-base font-semibold text-slate-800 mb-4">{title}</h3>
      <div className={`${height} bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center`}>
        <div className="text-center">
          <div className="flex items-end justify-center gap-1.5 mb-3">
            {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
              <div
                key={i}
                className="w-6 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t transition-all duration-300 hover:from-emerald-600 hover:to-emerald-500"
                style={{ height: `${h * 0.8}px` }}
              />
            ))}
          </div>
          <p className="text-xs text-slate-400">Biểu đồ placeholder</p>
        </div>
      </div>
    </div>
  );
}
