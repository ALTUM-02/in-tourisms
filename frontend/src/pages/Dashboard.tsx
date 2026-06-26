import DashboardLayout from "../components/dashboard/DashboardLayout";

import Hero from "../components/dashboard/Hero";

import StatsCards from "../components/dashboard/StatsCards";

import FeaturedDestinations from "../components/dashboard/FeaturedDestinations";

import WildlifeSection from "../components/dashboard/WildlifeSection";

import HotelSection from "../components/dashboard/HotelSection";

import FoodSection from "../components/dashboard/FoodSection";

import AIAssistant from "../components/dashboard/AIAssistant";

import LiveChat from "../components/dashboard/LiveChat";

import MapSection from "../components/dashboard/MapSection";

export default function Dashboard() {

    return (

        <DashboardLayout>

            <Hero/>

            <StatsCards/>

            <FeaturedDestinations/>

            <WildlifeSection/>

            <HotelSection/>

            <FoodSection/>

            <AIAssistant/>

            <LiveChat/>

            <MapSection/>

        </DashboardLayout>

    );

}