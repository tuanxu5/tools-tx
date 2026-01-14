import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Leaf, ChevronLeft, ChevronDown } from 'lucide-react';
import { menuItems, bottomMenuItems } from '../constants/menu';

// Tooltip component with portal-like positioning
function Tooltip({ show, label, triggerRef }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (show && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 12,
      });
    }
  }, [show, triggerRef]);

  if (!show) return null;

  return (
    <div 
      className="fixed px-3 py-2 bg-slate-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-[9999] pointer-events-none"
      style={{ 
        top: position.top,
        left: position.left,
        transform: 'translateY(-50%)'
      }}
    >
      {label}
      <div 
        className="absolute border-[6px] border-transparent border-r-slate-800"
        style={{ right: '100%', top: '50%', transform: 'translateY(-50%)' }}
      />
    </div>
  );
}

// Popup menu for collapsed state
function PopupMenu({ show, item, triggerRef }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const location = useLocation();

  useEffect(() => {
    if (show && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top,
        left: rect.right + 12,
      });
    }
  }, [show, triggerRef]);

  if (!show || !item.children) return null;

  return (
    <div 
      className="fixed bg-white rounded-xl shadow-xl border border-slate-200 py-2 min-w-[200px] z-[9999]"
      style={{ top: position.top, left: position.left }}
    >
      <div className="px-4 py-2 border-b border-slate-100 mb-1">
        <span className="text-sm font-semibold text-slate-700">{item.label}</span>
      </div>
      
      {item.children.map((child) => {
        const ChildIcon = child.icon;
        const isChildActive = location.pathname === child.path;
        
        return (
          <NavLink
            key={child.id}
            to={child.path}
            className={`
              flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-sm transition-all duration-200
              ${isChildActive 
                ? 'text-emerald-600 bg-emerald-50 font-medium' 
                : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
              }
            `}
          >
            <ChildIcon className="w-4 h-4 flex-shrink-0" />
            <span>{child.label}</span>
          </NavLink>
        );
      })}

      <div 
        className="absolute border-[8px] border-transparent border-r-white"
        style={{ right: '100%', top: '16px' }}
      />
    </div>
  );
}

// Single menu item (no children)
function MenuItem({ item, collapsed }) {
  const Icon = item.icon;
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const [hovered, setHovered] = useState(false);
  const itemRef = useRef(null);

  return (
    <div 
      ref={itemRef}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <NavLink
        to={item.path}
        className={`
          flex items-center gap-3 py-3 rounded-xl text-sm font-medium transition-all duration-200
          ${collapsed ? 'px-0 mx-2 justify-center' : 'px-4 mx-3'}
          ${isActive 
            ? 'text-emerald-600 bg-emerald-50/80' 
            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/60'
          }
        `}
      >
        <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-emerald-600' : ''}`} />
        {!collapsed && <span className="truncate">{item.label}</span>}
      </NavLink>

      <Tooltip show={collapsed && hovered} label={item.label} triggerRef={itemRef} />
    </div>
  );
}

// Menu item with children (submenu)
function MenuItemWithChildren({ item, collapsed }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const location = useLocation();
  const Icon = item.icon;
  const itemRef = useRef(null);
  
  const isChildActive = item.children?.some(child => location.pathname === child.path);
  const isActive = location.pathname === item.path || isChildActive;

  return (
    <div 
      ref={itemRef}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={() => !collapsed && setExpanded(!expanded)}
        className={`
          w-full flex items-center gap-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left
          ${collapsed ? 'px-0 mx-2 justify-center' : 'px-4 mx-3'}
          ${isActive 
            ? 'text-emerald-600 bg-emerald-50/80' 
            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/60'
          }
        `}
        style={{ width: collapsed ? 'calc(100% - 16px)' : 'calc(100% - 24px)' }}
      >
        <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-emerald-600' : ''}`} />
        
        {!collapsed && (
          <>
            <span className="truncate flex-1">{item.label}</span>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
          </>
        )}
      </button>

      {/* Inline Submenu - expanded mode */}
      {!collapsed && (
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="ml-6 mr-3 mt-1 space-y-0.5 border-l-2 border-slate-100">
            {item.children?.map((child) => {
              const ChildIcon = child.icon;
              const isChildItemActive = location.pathname === child.path;
              
              return (
                <NavLink
                  key={child.id}
                  to={child.path}
                  className={`
                    flex items-center gap-3 px-4 py-2.5 ml-2 rounded-lg text-sm transition-all duration-200
                    ${isChildItemActive 
                      ? 'text-emerald-600 bg-emerald-50/50 font-medium' 
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                    }
                  `}
                >
                  <ChildIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{child.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      )}

      {/* Popup Submenu - collapsed mode */}
      <PopupMenu show={collapsed && hovered} item={item} triggerRef={itemRef} />
    </div>
  );
}

function RenderMenuItem({ item, collapsed }) {
  if (item.children && item.children.length > 0) {
    return <MenuItemWithChildren key={item.id} item={item} collapsed={collapsed} />;
  }
  return <MenuItem key={item.id} item={item} collapsed={collapsed} />;
}

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <aside className={`
      fixed left-0 top-0 bottom-0 bg-white border-r border-slate-200 
      flex flex-col z-40 transition-all duration-300 ease-in-out
      ${collapsed ? 'w-[72px]' : 'w-64'}
    `}>
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-slate-100 flex-shrink-0">
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center w-full' : ''}`}>
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25 flex-shrink-0">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <h1 className="text-base font-bold text-slate-800 leading-tight">GreenBoard</h1>
              <p className="text-[11px] text-slate-400">Dashboard</p>
            </div>
          )}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-20 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-200 z-50"
      >
        <ChevronLeft className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} />
      </button>

      {/* Main Menu */}
      <nav className="flex-1 py-6 space-y-1 overflow-y-auto overflow-x-hidden">
        {!collapsed && (
          <p className="px-7 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Menu chính
          </p>
        )}
        {menuItems.map((item) => (
          <RenderMenuItem key={item.id} item={item} collapsed={collapsed} />
        ))}
      </nav>

      {/* Bottom Menu */}
      <div className="py-4 border-t border-slate-100 space-y-1 flex-shrink-0">
        {!collapsed && (
          <p className="px-7 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Khác
          </p>
        )}
        {bottomMenuItems.map((item) => (
          <MenuItem key={item.id} item={item} collapsed={collapsed} />
        ))}
      </div>
    </aside>
  );
}
