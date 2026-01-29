import { consoles } from "./data/consoles";
import HeroIntro from "./components/HeroIntro";
import ConsoleSection from "./components/ConsoleSection";
import ScrollProgress from "./components/ScrollProgress";
import SideTimeline from "./components/SideTimeline";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import BackgroundAudio from "./components/BackgroundAudio";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BackgroundAudio />
      <Loader isVisible={loading} />
      <ScrollProgress />
      <MobileMenu />
      {!loading && (
        <>
          <HeroIntro />
          <SideTimeline consoles={consoles} />
          {consoles.map((console: typeof consoles[0]) => (
            <ConsoleSection key={console.id} consoleData={console} />
          ))}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;


