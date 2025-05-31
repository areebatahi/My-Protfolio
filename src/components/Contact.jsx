import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; 
import { MdPhone } from "react-icons/md";


// Animation variants
const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-zinc-900 py-20 px-6 text-white">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Side */}
        <motion.div variants={item}>
          <motion.h2
            className="text-4xl font-bold text-emerald-400 mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Whether you have an idea or just want to say hi, my inbox is always open. I’ll try my best to get back to you!
          </motion.p>

          {/* Social links: icon unclickable, text clickable */}
          <motion.div
            className="flex flex-col gap-4 text-gray-400 mt-6"
            initial="hidden"
            whileInView="show"
            transition={{ delayChildren: 0.3, staggerChildren: 0.1 }}
          >
            {[
              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/in/yourusername",
                name: "LinkedIn",
              },
              {
                icon: <FaGithub />,
                link: "https://github.com/areebatahi",
                name: "https://github.com/areebatahi",
              },
              {
                icon: <MdPhone />,
                link: "tel:+923333187093",
                name: "+92 333 3187093",
              },
              {
                icon: <FaEnvelope />,
                link: "mailto:areebatahirarain@gmail.com",
                name: "areebatahirarain@gmail.com",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 text-lg font-medium text-gray-400"
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-zinc-800 p-8 rounded-2xl shadow-xl space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {[
            { name: "name", type: "text", placeholder: "John Doe" },
            { name: "email", type: "email", placeholder: "john@example.com" },
          ].map((field, idx) => (
            <motion.div key={idx} variants={item}>
              <label className="block text-sm text-gray-300 mb-1 capitalize">
                {field.name}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                required
                placeholder={field.placeholder}
                className="w-full p-3 rounded-lg bg-zinc-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </motion.div>
          ))}

          <motion.div variants={item}>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-zinc-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            ></textarea>
          </motion.div>

          <motion.button
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-emerald-400 hover:bg-emerald-500 text-zinc-900 font-semibold py-3 px-6 rounded-xl transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
