import { useState, useEffect } from 'react';
import { Compass, Home, MessageSquare, MapPin, Search, Bell, Settings, Plus, Minus } from 'lucide-react';
import api from '../services/api';
import type { DashboardResponse } from '../types/dashboard';
import { Link } from "react-router-dom";

export default function App() {

  const [data, setData] = useState<DashboardResponse | null>(null);
  const [activeTab, setActiveTab] = useState('Home');
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    // Fetch JSON data dynamically via API
    api.get<DashboardResponse>('/dashboard/overview')
      .then(res => setData(res.data))
      .catch(err => console.error("Error connecting to API context", err));
  }, []);

  return (


    <div className="min-h-screen bg-[#12141c] text-white font-sans p-4 lg:p-6 flex flex-col md:flex-row gap-6 selection:bg-orange-500">
      
      {/* 1. LEFT SIDEBAR */}
      <aside className="w-full md:w-64 bg-[#1a1d26]/80 backdrop-blur-md border border-gray-800 rounded-3xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 bg-gradient from-orange-500 to-amber-400 rounded-lg flex items-center justify-center">
              <Compass className="w-5 h-5 text-white animate-pulse" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient from-white to-gray-400 bg-clip-text text-transparent">AiroGuide</span>
          </div>
          
          

          <nav className="space-y-2">
            {[
              { name: 'Home', path: "/" , icon: Home },
              { name: 'Explore', icon: Compass },
              { name: 'Message', icon: MessageSquare },
              { name: 'Map', icon: MapPin },
            ].map((item) => (
            
        </div>

        {/* User Card Profile */}
        <div className="flex items-center gap-3 pt-6 border-t border-gray-800">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43" alt="User avatar" className="w-10 h-10 rounded-full object-cover border border-gray-700" />
          <div>
            <h4 className="text-sm font-semibold">Zaya</h4>
            <p className="text-xs text-gray-500">Travel Blogger</p>
          </div>
        </div>
      </aside>

      {/* 2. MIDDLE CONTENT AREA */}
      <main className="flex-1 flex flex-col gap-6">
        
        {/* TOP COMPACT NAV BAR */}
        <header className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#1a1d26]/40 backdrop-blur-sm p-3 rounded-2xl border border-gray-800/50">
          <div className="flex gap-2">
            {['Experiences', 'Trips', 'Services'].map((tab) => (
              <button key={tab} className="px-4 py-2 text-xs bg-white/5 rounded-xl border border-white/5 text-gray-300 font-medium hover:bg-white/10">{tab}</button>
            ))}
          </div>
          
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            <input type="text" placeholder="Search destinations, hotels..." className="w-full bg-[#111319] border border-gray-800 rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-orange-500 transition-colors text-gray-300" />
          </div>

          <div className="flex gap-2">
            <button className="p-2 bg-white/5 rounded-xl border border-white/5 text-gray-400 hover:text-white"><Bell className="w-4 h-4" /></button>
            <button className="p-2 bg-white/5 rounded-xl border border-white/5 text-gray-400 hover:text-white"><Settings className="w-4 h-4" /></button>
          </div>
        </header>

        {/* GREETINGS & FILTERS */}
        <div>
          <h1 className="text-3xl font-semibold mb-1 flex items-center gap-2">👋 Hey, Good Evening</h1>
          <p className="text-gray-400 text-sm">Let's make our travel plan awesome</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {['All', 'Adventure Trails', 'Scenic Views', 'Cultural Highlights', 'Photographer'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs transition-all ${
                  activeFilter === filter ? 'bg-white text-black font-semibold' : 'bg-[#1a1d26] text-gray-400 border border-gray-800 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* ANALYTICS CHARTS PANELS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Trip Performance Card */}
          <div className="bg-[#1a1d26]/80 border border-gray-800 p-5 rounded-3xl">
            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-4">Trip Performance Overview</span>
            <div className="grid grid-cols-3 gap-2 items-center">
              <div>
                <p className="text-2xl font-bold">{data?.performance.tripsCompleted || '148'}</p>
                <span className="text-[10px] text-gray-500">Trips Completed</span>
                <p className="text-2xl font-bold mt-4">{data?.performance.successfulTrips || '132'}</p>
                <span className="text-[10px] text-gray-500">Successful Tours</span>
              </div>
              <div className="text-center">
                <span className="text-4xl font-extrabold text-white">{data?.performance.overallSatisfaction || '91.2'}%</span>
                <span className="text-[10px] text-gray-400 block mt-1">Overall Satisfaction</span>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{data?.performance.onTimeTrips || '126'}</p>
                <span className="text-[10px] text-gray-500">On-Time Trips</span>
                <p className="text-2xl font-bold mt-4">{data?.performance.positiveReviews || '118'}</p>
                <span className="text-[10px] text-gray-500">Positive Reviews</span>
              </div>
            </div>
          </div>

          {/* Engagement Radial Panel */}
          <div className="bg-[#1a1d26]/80 border border-gray-800 p-5 rounded-3xl flex justify-between items-center">
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-wider block mb-4">Engagement Overview</span>
              <p className="text-2xl font-bold">{data?.engagement.activeUsers || '164'}</p>
              <span className="text-xs text-gray-500 block mb-3">Active Users</span>
              <p className="text-2xl font-bold">{data?.engagement.savedTrips || '142'}</p>
              <span className="text-xs text-gray-500">Saved Trips</span>
            </div>
            
            {/* Custom Radial Progress SVG */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-gray-800" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-orange-500 stroke-linecap-round" strokeDasharray={`${data?.engagement.engagementRate || 76.4}, 100`} strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute text-xl font-bold">{data?.engagement.engagementRate || '76.4'}%</div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE MAP CONTAINER MOCKUP */}
        <div className="bg-[#1a1d26]/80 border border-gray-800 rounded-3xl p-5 relative overflow-hidden h-64 group">
          <div className="absolute inset-0 bg-cover bg-center filter brightness-[0.4] contrast-[1.1] transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage:  `url('https://unsplash.com')` }}></div>
          
          <div className="relative z-10 flex justify-between items-start h-full flex-col">
            <div className="w-full flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Explore Nearby</h3>
                <p className="text-xs text-gray-400">Egypt Grid Overview</p>
              </div>
              <div className="flex flex-col gap-1 bg-black/40 backdrop-blur-md p-1 rounded-xl border border-white/10">
                <button className="p-1.5 hover:bg-white/10 rounded-lg"><Plus className="w-3 h-3" /></button>
                <button className="p-1.5 hover:bg-white/10 rounded-lg"><Minus className="w-3 h-3" /></button>
              </div>
            </div>
          </div>  
            
            {/* Custom Bottom Carousel Overlay Items */}
            <div className="w-full grid grid-cols-4 gap-2 pt-2">
                {[1,2,3,4].map((i) => (
                  <div
                      key={i}
                      className="bg-black/60 ..."
                  ></div>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
  }      