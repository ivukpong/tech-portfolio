"use client";
import Header from "@/components/Header";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { data } from "@/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-text font-[Montserrat]">
      <Header data={data.main} />
      <About data={data.main} />
      <Resume data={data.resume} />
      <Portfolio data={data.portfolio} />
      <Contact data={data.main} />
      <Footer data={data.main} />
    </main>
  );
}
