"use client";
import dynamic from "next/dynamic";
import { data } from "@/data";

// Dynamically import all components with `ssr: false`
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Resume = dynamic(() => import("@/components/Resume"), { ssr: false });
const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

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
