"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    
    // Store reference to the form before async operations
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    // Provide the access key
    formData.append("access_key", "f8b7a539-6032-4122-8887-4fe9f3a50819");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        // Reset the form using the stored reference
        formElement.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => setResult(""), 5000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-8 md:py-12 relative overflow-hidden border-t border-white/40 bg-white/20">


      <div className="container relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-8 md:mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B253D]">
            Contact Me
          </h2>
          <div className="h-[2px] w-20 bg-[#009ca6] rounded-full mb-6" />
          <p className="text-[#475569] max-w-2xl text-center text-base font-medium">
            Ready to work together? Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Left Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#0B253D] mb-8 uppercase tracking-widest">Contact Information</h3>
              
              <div className="space-y-8">
                <a href="mailto:rushjivrajani48@gmail.com" className="flex items-center gap-6 text-[#475569] hover:text-[#009ca6] transition-colors group/item">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-md border border-white flex items-center justify-center group-hover/item:border-[#009ca6]/30 shadow-sm transition-all group-hover/item:scale-105">
                    <Mail className="w-6 h-6 text-[#009ca6]" />
                  </div>
                  <span className="text-base font-semibold tracking-wider">rushjivrajani48@gmail.com</span>
                </a>
                
                <div className="flex items-center gap-6 text-[#475569] group/item hover:text-[#009ca6] transition-colors cursor-default">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-md border border-white flex items-center justify-center group-hover/item:border-[#009ca6]/30 shadow-sm transition-all group-hover/item:scale-105">
                    <Phone className="w-6 h-6 text-[#009ca6]" />
                  </div>
                  <span className="text-base font-semibold tracking-wider">+91 90995 38086</span>
                </div>
                
                <div className="flex items-center gap-6 text-[#475569] group/item hover:text-[#009ca6] transition-colors cursor-default">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-md border border-white flex items-center justify-center group-hover/item:border-[#009ca6]/30 shadow-sm transition-all group-hover/item:scale-105">
                    <MapPin className="w-6 h-6 text-[#009ca6]" />
                  </div>
                  <span className="text-base font-semibold tracking-wider">Ahmedabad, Gujarat</span>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              <a href="https://github.com/rush4812" target="_blank" className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-md border border-white flex items-center justify-center text-[#475569] hover:text-[#0B253D] shadow-sm transition-all hover:-translate-y-2 hover:shadow-md">
                <FaGithub className="w-7 h-7" />
              </a>
              <a href="https://linkedin.com/in/rushali-jivrajani-448201202" target="_blank" className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-md border border-white flex items-center justify-center text-[#475569] hover:text-[#0077b5] shadow-sm transition-all hover:-translate-y-2 hover:shadow-md">
                <FaLinkedin className="w-7 h-7" />
              </a>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={onSubmit} className="bg-white/60 backdrop-blur-md md:backdrop-blur-xl rounded-3xl p-6 md:p-12 space-y-8 relative border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all h-full flex flex-col">
              
              <div className="space-y-6 flex-grow relative z-10">
                <div className="relative">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-[#475569] mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-white/50 border border-white rounded-xl px-5 py-4 text-[#0B253D] focus:outline-none focus:border-[#009ca6] focus:bg-white transition-all shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-[#475569] mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-white/50 border border-white rounded-xl px-5 py-4 text-[#0B253D] focus:outline-none focus:border-[#009ca6] focus:bg-white transition-all shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-[#475569] mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-white/50 border border-white rounded-xl px-5 py-4 text-[#0B253D] focus:outline-none focus:border-[#009ca6] focus:bg-white transition-all resize-none shadow-sm"
                    placeholder="Write your message here..."
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 rounded-xl font-bold text-white bg-[#0B253D] hover:bg-[#009ca6] transition-all flex items-center justify-center gap-3 group/btn mt-auto relative z-10 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Send Message
                <Send className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </button>
              
              {result && (
                <p className={`text-center font-semibold text-sm ${result === "Message Sent Successfully!" ? "text-green-600" : "text-[#0B253D]"}`}>
                  {result}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
