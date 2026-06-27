import { useEffect, useState } from 'react';
import api from '../services/api';

interface Stats {
  totalBookings: number;
  revenue: number;
  activeTours: number;
}

export default function DashboardOverview() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/dashboard/summary-stats')
      .then((response) => {
        setStats(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dashboard stats:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6 text-center">Loading dashboard data...</div>;

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-800 mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-slate-500 text-sm">Total Bookings</p>
          <p className="text-3xl font-bold text-slate-800">{stats?.totalBookings ?? 0}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-slate-500 text-sm">Revenue</p>
          <p className="text-3xl font-bold text-slate-800">${stats?.revenue.toLocaleString() ?? 0}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-slate-500 text-sm">Active Tours</p>