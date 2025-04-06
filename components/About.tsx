import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaBriefcase } from "react-icons/fa";

interface AboutProps {
  data: {
    name: string;
    bio: string;
    phone: string;
    email: string;
    image: string;
  };
}

export default function About({ data }: AboutProps) {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24"
    >
      {/* Parallax Background Elements */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 opacity-20"
      ></motion.div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Animated Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <img
              src={`/images/${data.image}`}
              alt={data.name}
              className="rounded-full w-52 h-52 md:w-64 md:h-64 border-4 border-accent object-cover shadow-xl transition-transform hover:scale-105"
            />
          </motion.div>

          {/* Bio and Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <h2 className="text-4xl font-extrabold text-accent mb-4">
              About Me
            </h2>
            <p className="text-lg text-textMuted leading-relaxed mb-6">
              {data.bio}
            </p>

            {/* Contact Info */}
            <div className="space-y-4 bg-dark/10 p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-accent flex items-center gap-2">
                <FaBriefcase /> Contact Details
              </h3>
              <span className="block font-semibold">{data.name}</span>
              <p className="text-textMuted flex items-center gap-2">
                <FaEnvelope className="text-xl text-accent" />
                <a
                  href={`mailto:${data.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {data.email}
                </a>
              </p>
              <p className="text-textMuted flex items-center gap-2">
                <FaPhone className="text-xl text-accent" />{" "}
                <a
                  href={`tel:+2349079232170`}
                  className="hover:text-accent transition-colors"
                >
                  {data.phone}
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
