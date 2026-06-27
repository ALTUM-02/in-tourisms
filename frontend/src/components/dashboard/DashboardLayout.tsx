import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      {/* Sidebar for Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 text-xl font-bold border-b border-slate-800">Explore TZ Dashboard</div>
        <nav className="p-4 space-y-2">
          <a href="/dashboard" className="block px-4 py-2 rounded bg-sky-600 text-white">Overview</a>
          <a href="/dashboard/bookings" className="block px-4 py-2 rounded hover:bg-slate-800 text-slate-400">Bookings</a>
          <a href="/dashboard/tours" className="block px-4 py-2 rounded hover:bg-slate-800 text-slate-400">Tours</a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex justify-between items-center bg-white p-4 shadow-sm">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 text-slate-600">
            ☰ Menu
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-slate-700">Tourism Admin</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
