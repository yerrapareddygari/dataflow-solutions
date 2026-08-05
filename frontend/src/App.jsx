import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Vision />
      <WhyChooseUs />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
