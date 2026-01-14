import { Search, Bell, ChevronDown, Menu } from 'lucide-react';

export default function Header({ title, onMenuClick }) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
      {/* Left: Menu button (mobile) + Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-slate-100 lg:hidden"
        >
          <Menu className="w-5 h-5 text-slate-600" />
        </button>
        <h1 className="text-lg font-semibold text-slate-800">{title}</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 lg:gap-3">
        {/* Search - hidden on mobile */}
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-48 lg:w-56 pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
          />
        </div>

        {/* Search button - mobile only */}
        <button className="p-2 rounded-lg hover:bg-slate-100 md:hidden">
          <Search className="w-5 h-5 text-slate-500" />
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200">
          <Bell className="w-5 h-5 text-slate-500" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
        </button>

        {/* Divider - hidden on mobile */}
        <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>

        {/* User */}
        <button className="flex items-center gap-2 hover:bg-slate-50 rounded-lg p-1.5 pr-2 transition-colors">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="Avatar"
            className="w-8 h-8 rounded-full bg-emerald-100"
          />
          <div className="hidden sm:block text-left">
            <p className="text-sm font-medium text-slate-700 leading-tight">Nguyễn Văn A</p>
            <p className="text-[11px] text-slate-400">Admin</p>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
        </button>
      </div>
    </header>
  );
}
