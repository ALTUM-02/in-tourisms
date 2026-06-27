import { useEffect, useState } from 'react';
import api from '../services/api';

interface Stats {
  totalBookings: number;
  revenue: number;
  activeTours: number;
}

export default function DashboardOverview() {
  const [stats, setStats] = useState<Stats | null>(nul