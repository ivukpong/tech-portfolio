import { motion } from "framer-motion";
import { SocialLink } from "@/types/resume";

interface FooterProps {
  data: {
    social: SocialLink[];
  };
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="relative py-12 border-t border-secondary overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-cover bg-fixed opacity-10" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Social Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, duration: 0.6 },
              },
            }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {data.social.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-textMuted hover:text-accent transition-all duration-300"
              >
                <i className={`${link.className} text-3xl`} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-textMuted text-sm text-center"
          >
            &copy; {new Date().getFullYear()} Iniobong Ukpong. All rights
            reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
