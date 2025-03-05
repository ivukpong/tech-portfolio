import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaUser, FaPaperPlane } from "react-icons/fa";

interface ContactProps {
  data: {
    email: string;
    phone: string;
  };
}

export default function Contact({ data }: ContactProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 relative bg-secondary overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-[url('/matrix.jpg')] bg-cover bg-fixed opacity-10" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-accent mb-10 text-center">
            Get In Touch
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, duration: 0.6 },
              },
            }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Contact Info */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-accent flex items-center gap-2">
                <FaEnvelope className="text-accent" /> Contact Information
              </h3>
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
                <FaPhone className="text-xl text-accent" /> {data.phone}
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="space-y-6 bg-primary/30 p-6 rounded-lg shadow-lg backdrop-blur-md text-black"
            >
              <div>
                <label htmlFor="name" className="block text-textMuted mb-2">
                  Name
                </label>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <FaUser className="text-accent mr-3" />
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-textMuted"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-textMuted mb-2">
                  Email
                </label>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <FaEnvelope className="text-accent mr-3" />
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-textMuted"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-textMuted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 bg-white rounded-lg text-textMuted outline-none"
                  placeholder="Your Message"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full p-3 bg-accent text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-accent/80 transition-colors"
                disabled={loading}
              >
                <FaPaperPlane /> {loading ? "Sending..." : "Send Message"}
              </motion.button>

              {success && (
                <p className="text-green-500 text-center mt-3">
                  Message sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-500 text-center mt-3">{error}</p>
              )}
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
