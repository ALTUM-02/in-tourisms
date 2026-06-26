import { useEffect, useState } from "react";

import DashboardLayout
from "../layouts/DashboardLayout";

import Hero
from "../components/dashboard/Hero";

import StatsCards
from "../components/dashboard/StatsCards";

import {
    getDashboard,
    getProfile,
} from "../services/dashboardService";

import type {
    DashboardStats,
    UserProfile,
} from "../types/dashboard";

function Dashboard() {

    const [user, setUser] =
        useState<UserProfile | null>(null);

    const [stats, setStats] =
        useState<DashboardStats>({
            destinations: 0,
            wildlife: 0,
            hotels: 0,
            foods: 0,
        });

    useEffect(() => {

        getProfile().then((res) => {

            setUser(res.data);

        });

        getDashboard().then((res) => {

            setStats(res.data);

        });

    }, []);

    if (!user) {

        return <p>Loading...</p>;

    }

    return (

        <DashboardLayout>

            <Hero user={user} />

            <StatsCards stats={stats} />

        </DashboardLayout>

    );

}

export default Dashboard;