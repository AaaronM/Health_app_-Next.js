import AppSection from "./components/AppSection";
import ContactSection from "./components/ContactSection";

import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Stories from "./components/Stories";
import Main from "./components/Main";
import AppBody from "./components/AppBody";
import Intrototheapp from "./components/intrototheapp";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Main />
      <Service />
      <AppSection />
      <Intrototheapp />
      <AppBody />
      <Stories />
      <ContactSection />
    </div>
  );
}
