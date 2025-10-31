"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Linkedin, GraduationCap, FileText, Send } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-navy/10 via-white to-gold/10">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          Get in Touch
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-navy/5 to-gold/5 p-8 rounded-lg border border-navy/10">
            <h3 className="text-2xl font-bold text-navy mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-text/70 font-semibold mb-2">Email</p>
                  <a href="mailto:latika.mehrotra@medicaps.ac.in" className="block text-navy hover:text-gold transition-colors mb-1 font-medium">
                    latika.mehrotra@medicaps.ac.in
                  </a>
                  <a href="mailto:Latika19mehrotra@gmail.com" className="block text-navy hover:text-gold transition-colors font-medium">
                    Latika19mehrotra@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-text/70 font-semibold mb-2">Office Address</p>
                  <p className="text-navy leading-relaxed font-medium">
                    V-127, V Block<br />
                    Department of Computer Science & Engineering<br />
                    Medicaps University<br />
                    Indore 453331, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-navy/10">
              <h3 className="text-xl font-bold text-navy mb-4">Connect Online</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://in.linkedin.com/in/dr-latika-jindal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-all hover:scale-105 shadow-sm"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://scholar.google.com/citations?user=4rJX49MAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-navy rounded-lg hover:bg-gold/90 transition-all hover:scale-105 shadow-sm"
                >
                  <GraduationCap size={20} />
                  Google Scholar
                </a>
                <a
                  href="https://orcid.org/0000-0003-1773-2171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-navy rounded-lg hover:bg-gold/90 transition-all hover:scale-105 shadow-sm"
                >
                  <FileText size={20} />
                  ORCID
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg border border-gold/20 shadow-sm">
            <h3 className="text-2xl font-bold text-navy mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  submitted
                    ? "bg-green-600 text-white"
                    : "bg-navy text-white hover:bg-navy/90 hover:scale-105"
                }`}
              >
                {submitted ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
