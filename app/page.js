import AppSection from "./components/AppSection";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Stories from "./components/Stories";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Main />
      <Service />
      <AppSection />
      <Stories />
      <ContactSection />
    </div>
  );
}
