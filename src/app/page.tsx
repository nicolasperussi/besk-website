import Contact from "./components/Contact";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Lawyers from "./components/Lawyers";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Lawyers />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}
