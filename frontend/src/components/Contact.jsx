import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdLocalPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center py-10 px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        
        {/* Contact Form */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-emerald-400">Get In Touch</h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-white">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-emerald-500 bg-zinc-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-white">Email Address</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 border border-emerald-500 bg-zinc-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-white">Your Message</label>
              <textarea
                rows="5"
                placeholder="Hello, I'd like to discuss a project..."
                className="w-full px-4 py-2 border border-emerald-500 bg-zinc-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-emerald-500 hover:bg-zinc-900 cursor-pointer border border-emerald-500 text-white rounded-md font-semibold transition-colors duration-300"
            >
              🚀 Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-bold text-emerald-400 mb-6">Contact Information</h3>

          <div className="space-y-6 text-white">

            {/* Email */}
            <div className="flex items-start gap-3">
              <MdEmail className="text-3xl text-emerald-400" />
              <div>
                <p className="text-sm font-semibold">Email</p>
                <a
                  href="mailto:areebatahirarain7@gmail.com"
                  className="text-white hover:text-emerald-400 underline cursor-pointer transition-colors duration-300"
                >
                  areebatahirarain7@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-3">
              <FaLinkedin className="text-3xl text-emerald-400" />
              <div>
                <p className="text-sm font-semibold">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/areeba-tahir-arain-10a86936a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 underline cursor-pointer transition-colors duration-300"
                >
                  www.linkedin.com/in/areeba-tahir-arain-10a86936a
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start gap-3">
              <FaGithub className="text-3xl text-emerald-400" />
              <div>
                <p className="text-sm font-semibold">GitHub</p>
                <a
                  href="https://github.com/areebatahi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 underline cursor-pointer transition-colors duration-300"
                >
                  github.com/areebatahi
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <MdLocalPhone className="text-3xl text-emerald-400" />
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <a
                  href="tel:+923333187093"
                  className="text-white hover:text-emerald-400 underline cursor-pointer transition-colors duration-300"
                >
                  +92 333 3187093
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <MdLocationOn className="text-3xl text-emerald-400" />
              <div>
                <p className="text-sm font-semibold">Location</p>
                <p>Karachi Division, Sindh, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 border-t border-zinc-700 pt-4 text-white">
            <p className="text-sm font-medium mb-2">Also find me on:</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/areebatahi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 text-3xl transition-colors duration-300 cursor-pointer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/areeba-tahir-arain-10a86936a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 text-3xl transition-colors duration-300 cursor-pointer"
              >
                <FaLinkedin />
              </a>
              <a
                href="tel:+923333187093"
                className="text-white hover:text-emerald-400 text-3xl transition-colors duration-300 cursor-pointer"
              >
                <MdLocalPhone />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
