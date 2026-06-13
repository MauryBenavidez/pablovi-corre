import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import About from './components/About';
import Gallery from './components/Gallery';
import Distances from './components/Distances';
import Kits from './components/Kits';

import Categories from './components/Categories';
import Registration from './components/Registration';
import Organizers from './components/Organizers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Countdown />
      <About />
      <Gallery />
      <Distances />
      <Kits />
      <Registration />
      <Categories />
      <Organizers />
      <FAQ />
      <Footer />
    </div>
  );
}
