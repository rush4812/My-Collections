"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to build something amazing together? Feel free to reach out for collaborations, opportunities, or just a quick hello.
          </p>
        </motion.div>

        <div className="row items-center">
          
          {/* Left Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col md:w-1/2 space-y-8 mb-12 md:mb-0"
          >
            <div className="glass-card p-8 group hover:border-purple-500/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:rushjivrajani48@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-purple-400 transition-colors group/item">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/item:bg-purple-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg">rushjivrajani48@gmail.com</span>
                </a>
                
                <div className="flex items-center gap-4 text-gray-400 group/item">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">+91 90995 38086</span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-400 group/item">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Ahmedabad, Gujarat</span>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="https://github.com/rush4812" target="_blank" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-purple-400 transition-all hover:-translate-y-1">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-blue-400 transition-all hover:-translate-y-1">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col md:w-1/2"
          >
            <form className="glass-card p-8 space-y-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all resize-none"
                    placeholder="Hello Rushali, I'd like to discuss..."
                  />
                </div>

                <button 
                  type="button" 
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group/btn"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
