import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Navbar />
      <HeroSection />
      {/* Additional sections can be added here */}
    </div>
  );
}