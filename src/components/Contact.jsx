import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const SocialLink = ({ icon, link, name }) => (
  <motion.div
    className="flex items-center gap-3 text-lg font-medium text-gray-400"
    whileTap={{ scale: 0.95 }}
    role="listitem"
  >
    <span className="text-2xl" aria-hidden="true">
      {icon}
    </span>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-emerald-400 transition-colors duration-300"
      aria-label={`Visit my ${name}`}
    >
      {name}
    </a>
  </motion.div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      errs.email = "Invalid email address";
    }
    if (!form.message.trim()) errs.message = "Message cannot be empty";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFeedback(null);
      return;
    }

    setLoading(true);
    setFeedback(null);

    try {
      await new Promise((res) => setTimeout(res, 1500));
      setFeedback({ type: "success", message: "Message sent successfully!" });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      setFeedback({
        type: "error",
        message: "Oops! Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/yourusername",
      name: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/areebatahi",
      name: "GitHub",
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
    {
      icon: <GoLocation />,
      link: null, // no link for location
      name: "Karachi Division, Sindh, Pakistan",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-zinc-900 py-20 px-6 text-white min-h-screen flex items-center flex-col"
      aria-labelledby="contact-heading"
    >
      <motion.h2
        id="contact-heading"
        className="text-4xl font-bold text-emerald-400 mb-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        role="region"
        aria-describedby="contact-description"
      >
        {/* Left Side Card */}
        <motion.div
          variants={item}
          className="bg-zinc-800 p-8 rounded-2xl shadow-xl space-y-8 h-full"
        >
          <div>
            <h3 className="text-3xl font-semibold text-emerald-400 mb-6">
              Contact Information
            </h3>

            <motion.div
              className="flex flex-col gap-4 text-gray-400 mt-4"
              initial="hidden"
              whileInView="show"
              transition={{ delayChildren: 0.3, staggerChildren: 0.1 }}
              role="list"
              aria-label="Social media and contact links"
            >
              {socialLinks.map(({ icon, link, name }, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-lg hover:text-emerald-400 transition-colors duration-300"
                  whileTap={{ scale: 0.95 }}
                  role="listitem"
                >
                  <span
                    className="text-2xl text-emerald-400"
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all"
                      aria-label={`Visit my ${name}`}
                    >
                      {name}
                    </a>
                  ) : (
                    <span>{name}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <h4 className="text-2xl font-semibold text-emerald-400 mb-4">
              Also find me on:
            </h4>
          </div>

          <motion.div
            className="flex flex-col gap-6 text-gray-400 mt-4"
            initial="hidden"
            whileInView="show"
            transition={{ delayChildren: 0.3, staggerChildren: 0.1 }}
            role="list"
            aria-label="Social media and contact links"
          >
            <div className="flex gap-8">
              <motion.div
                className="flex items-center gap-3 text-lg text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                whileTap={{ scale: 0.95 }}
                role="listitem"
              >
                <a
                  href="https://linkedin.com/in/muhammad-fuzail-3980592aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn"
                  className="pr-2"
                >
                  <FaLinkedin className="text-4xl" aria-hidden="true" />
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 text-lg font-medium text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                whileTap={{ scale: 0.95 }}
                role="listitem"
              >
                <a
                  href="https://github.com/areebatahi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub"
                >
                  <FaGithub className="text-4xl" aria-hidden="true" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-zinc-800 p-8 rounded-2xl shadow-xl space-y-6 h-full"
          variants={container}
          initial="hidden"
          whileInView="show"
          noValidate
          aria-live="polite"
        >
          {[
            { name: "name", type: "text", placeholder: "John Doe" },
            { name: "email", type: "email", placeholder: "john@example.com" },
          ].map((field, idx) => (
            <motion.div key={idx} variants={item} className="relative">
              <label
                htmlFor={field.name}
                className="block text-sm text-gray-300 mb-1 capitalize"
              >
                {field.name}
              </label>
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                required
                placeholder={field.placeholder}
                className={`w-full p-3 rounded-lg bg-zinc-900 border ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-gray-700 focus:ring-emerald-400"
                } text-white focus:outline-none transition`}
                aria-invalid={errors[field.name] ? "true" : "false"}
                aria-describedby={`${field.name}-error`}
              />
              {errors[field.name] && (
                <p
                  id={`${field.name}-error`}
                  className="text-red-500 text-sm mt-1 absolute"
                  role="alert"
                >
                  {errors[field.name]}
                </p>
              )}
            </motion.div>
          ))}

          <motion.div variants={item} className="relative">
            <label
              htmlFor="message"
              className="block text-sm text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message..."
              className={`w-full p-3 rounded-lg bg-zinc-900 border ${
                errors.message
                  ? "border-red-500"
                  : "border-gray-700 focus:ring-emerald-400"
              } text-white focus:outline-none transition resize-none`}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby="message-error"
            ></textarea>
            {errors.message && (
              <p
                id="message-error"
                className="text-red-500 text-sm mt-1 absolute"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </motion.div>

          <motion.button
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className={`w-full bg-emerald-400 hover:bg-emerald-500 text-zinc-900 font-semibold py-3 px-6 rounded-xl transition flex justify-center items-center gap-2 ${
              loading ? "cursor-not-allowed opacity-70" : ""
            }`}
            disabled={loading}
            aria-live="polite"
            aria-busy={loading}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-zinc-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {feedback && (
            <motion.p
              className={`mt-4 text-center ${
                feedback.type === "success"
                  ? "text-emerald-400"
                  : "text-red-500"
              } font-semibold`}
              role="alert"
            >
              {feedback.message}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
