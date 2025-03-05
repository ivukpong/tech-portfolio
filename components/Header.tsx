import { motion } from "framer-motion";
import ParticlesBg from "particles-bg";
import { JSX } from "react";
import {
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

interface SocialLink {
  name: string;
  url: string;
}

interface HeaderProps {
  data: {
    name: string;
    description: string;
    social: SocialLink[];
  };
}

const iconMap: Record<string, JSX.Element> = {
  facebook: <FaFacebook className="text-4xl" />,
  X: <FaXTwitter className="text-4xl" />,
  linkedin: <FaLinkedin className="text-4xl" />,
  instagram: <FaInstagram className="text-4xl" />,
  github: <FaGithub className="text-4xl" />,
};

export default function Header({ data }: HeaderProps) {
  return (
    <header className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-secondary overflow-hidden">
      <ParticlesBg type="cobweb" color="#64ffda" bg={true} num={80} />

      {/* Animated Name */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold text-center text-accent drop-shadow-lg"
      >
        {data.name}
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-lg md:text-2xl text-textMuted max-w-3xl text-center mt-4 px-6"
      >
        {data.description}
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="mt-8 flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {data.social.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-text transition-transform transform hover:scale-125 duration-300"
          >
            {iconMap[link.name.toLowerCase()] || (
              <FaGithub className="text-4xl" />
            )}
          </a>
        ))}
      </motion.div>
    </header>
  );
}
