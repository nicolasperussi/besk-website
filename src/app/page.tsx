import Contact from "@/components/Contact";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Lawyers from "@/components/Lawyers";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <a
        href="https://wa.me/5511982457385"
        target="_blank"
        className="fixed bottom-5 right-5 bg-[#25D366] rounded-full p-4 shadow-md grid place-content-center z-50 transition-transform duration-300 hover:scale-110"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          height={40}
          width={40}
        />
      </a>

      <Hero />
      <Services />
      <Lawyers />
      <Content />
    </div>
  );
}
