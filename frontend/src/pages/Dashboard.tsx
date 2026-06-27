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
