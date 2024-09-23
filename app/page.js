import WhatsAppButton from "./components/BtnWhatsApp";
import { LampDemo } from "./components/components/M&V";
import { CardSpotlightDemo, WobbleCardDemo } from "./components/components/M&VCards";
import { Navbar } from "./components/components/Navbar";
import { CardHoverEffectDemo } from "./components/components/WobbleCard";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <Hero />
      <Services />
      {/* <WobbleCardDemo /> */}
      <CardSpotlightDemo />
      <WhatsAppButton />
      <LampDemo />

    </>

  );
}
