import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedDestinations from "../components/FeaturedDestinations";
import WildlifePreview from "../components/WildlifePreview";
import HotelsPreview from "../components/HotelPreview";
import AIAssistantPreview from "../components/AIAssistantPreview";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedDestinations />

      <WildlifePreview />

      <HotelsPreview />

      <AIAssistantPreview />

    
    </>
  );
}

export default Home;