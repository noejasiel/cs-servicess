import WhatsAppButton from "./components/BtnWhatsApp";
import { LampDemo } from "./components/components/M&V";
import { CardSpotlightDemo, WobbleCardDemo } from "./components/components/M&VCards";
import { Navbar } from "./components/components/Navbar";
import { CardHoverEffectDemo } from "./components/components/WobbleCard";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { ContactForm, SignupFormDemo } from "./components/ContactForm";


export default function Home() {
  return (
    <div id="home">
      {/* <Navbar /> */}
      <Navbar />
      <Hero />
      <Services />
      {/* <WobbleCardDemo /> */}
      <CardSpotlightDemo />
      <WhatsAppButton />
      <LampDemo />
      <SignupFormDemo />
      <Footer />
    </div>

  );
}
