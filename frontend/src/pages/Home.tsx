import  { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, Search, Compass, MapPin, Calendar, Utensils, Hotel, Sparkles, MessageSquare } from 'lucide-react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const destinations = [
    { name: "Serengeti National Park", type: "Wildlife", image: "https://unsplash.com" },
    { name: "Ngorongoro Crater", type: "Wildlife", image: "https://unsplash.com" },
    { name: "Zanzibar Beaches", type: "Coastal", image: "https://unsplash.com" },
  ];

  const foods = [
    { name: "Ugali na Nyama Choma", desc: "Savory grilled meat with maize porridge." },
    { name: "Zanzibar Pilau", desc: "Spiced rice cooked with meat and local herbs." },
    { name: "Mandazi", desc: "Sweet, fluffy Swahili doughnut." }
  ];

  const hotels = [
    { name: "Four Seasons Safari Lodge", location: "Serengeti", image: "https://unsplash.com" },
    { name: "Zuri Zanzibar", location: "Zanzibar", image: "https://unsplash.com" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Responsive Navigation Bar */}
      <nav className="fixed w-full bg-white shadow-md z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-600 tracking-wider">TANZANIA</div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <a href="#destinations" className="hover:text-amber-600">Destinations</a>
            <a href="#hotels" className="hover:text-amber-600">Hotels</a>
            <a href="#food" className="hover:text-amber-600">Local Foods</a>
            <a href="#ai-assistant" className="flex items-center gap-1 text-amber-600 font-semibold"><Sparkles size={18} /> AI Travel Mate</a>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-6 flex flex-col space-y-4 shadow-lg">
            <a href="#destinations" className="hover:text-amber-600" onClick={() => setIsOpen(false)}>Destinations</a>
            <a href="#hotels" className="hover:text-amber-600" onClick={() => setIsOpen(false)}>Hotels</a>
            <a href="#food" className="hover:text-amber-600" onClick={() => setIsOpen(false)}>Local Foods</a>
            <a href="#ai-assistant" className="text-amber-600" onClick={() => setIsOpen(false)}>AI Travel Mate</a>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Link
  to="/login"
  className="w-full px-4 py-2 border border-amber-600 text-amber-600 rounded-lg text-center"
>
  Log In
</Link>

<Link
  to="/register"
  className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg text-center"
>
  Register
</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 bg-[url('https://unsplash.com')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Discover the Magic of Tanzania</h1>
          <p className="text-lg md:text-xl mb-8">From the vast plains of the Serengeti to the crystal waters of Zanzibar</p>
          <div className="bg-white p-2 rounded-xl shadow-lg flex flex-col md:flex-row items-center text-gray-700 max-w-2xl mx-auto">
            <div className="flex items-center px-4 py-2 w-full border-b md:border-b-0 md:border-r border-gray-200">
              <MapPin className="text-gray-400 mr-2" />
              <input type="text" placeholder="Where to?" className="w-full focus:outline-none" />
            </div>
            <div className="flex items-center px-4 py-2 w-full border-b md:border-b-0 md:border-r border-gray-200">
              <Calendar className="text-gray-400 mr-2" />
              <input type="text" placeholder="When?" className="w-full focus:outline-none" />
            </div>
            <button className="bg-amber-600 text-white font-medium px-6 py-3 rounded-lg w-full md:w-auto mt-2 md:mt-0 flex items-center justify-center gap-2 hover:bg-amber-700">
              <Search size={18} /> Explore
            </button>
          </div>
        </div>
      </section>

      {/* Wildlife Destinations Section */}
      <section id="destinations" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2"><Compass className="text-amber-600" /> Wildlife & Destinations</h2>
        <p className="text-gray-500 mb-10">Explore the world's most breathtaking national parks.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative h-64">
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">{dest.type}</span>
                <h3 className="text-white text-xl font-bold">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section id="hotels" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-2"><Hotel className="text-amber-600" /> Featured Stays</h2>
          <p className="text-gray-500 mb-10">Unwind in luxury lodges and tropical beachfront resorts.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotels.map((hotel, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row">
                <img src={hotel.image} alt={hotel.name} className="w-full md:w-2/5 h-64 object-cover" />
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                  <p className="text-gray-500 flex items-center gap-1 mb-6"><MapPin size={16} /> {hotel.location}</p>
                  <button className="text-amber-600 font-semibold flex items-center gap-1 group w-max">Book Now &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Foods Section */}
      <section id="food" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2"><Utensils className="text-amber-600" /> Local Cuisine</h2>
        <p className="text-gray-500 mb-10">Savor the authentic flavors of Swahili and Zanzibari cooking.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {foods.map((food, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{food.name}</h3>
              <p className="text-gray-500 text-sm">{food.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Travel Assistant Preview Section */}
      <section id="ai-assistant" className="bg-amber-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-2"><Sparkles className="text-amber-400" /> Meet Your AI Safari Planner</h2>
            <p className="text-amber-100 mb-6 text-lg leading-relaxed">
              Not sure where to start? Let our AI assistant build a custom 7-day itinerary tailored specifically to your interests and budget in Tanzania. Get instant tips on the Great Migration, Kilimanjaro routes, and beach resorts.
            </p>
            <button className="bg-white text-amber-900 font-semibold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-gray-100 shadow-lg">
              <MessageSquare size={20} /> Chat with AI Assistant
            </button>
          </div>
          <div className="flex-1 bg-amber-800 rounded-2xl p-6 shadow-xl border border-amber-700/50 w-full max-w-md">
            <div className="flex items-center gap-3 mb-4 border-b border-amber-700 pb-3">
              <div className="w-10 h-10 bg-amber-400 text-amber-900 rounded-full flex items-center justify-center font-bold">AI</div>
              <div>
                <h4 className="font-semibold text-sm">Zuri, Your Travel Guide</h4>
                <span className="text-xs text-amber-300">Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );

 

export default Home;      