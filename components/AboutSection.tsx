"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Building2, GraduationCap } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white via-background to-gold/10">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-text leading-relaxed">
              I am <strong>Dr. Latika Jindal</strong>, an Associate Professor in the Department of Computer Science & Engineering at Medicaps University, Indore. With over 15 years of dedicated experience in academia, I specialize in teaching, research, and curriculum development, with a focus on emerging technologies.
            </p>

            <p className="text-lg text-text leading-relaxed">
              My research interests span across <strong>Machine Learning, Deep Learning, Blockchain Technology, Cybersecurity, and IoT</strong>. I have published extensively in reputed international journals and conferences, and hold multiple patents in innovative technological solutions.
            </p>

            <p className="text-lg text-text leading-relaxed">
              I am passionate about fostering student engagement, advancing academic excellence, and contributing to the broader academic community through workshops, certifications, and collaborative research initiatives.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="space-y-4">
            {/* Professional Info Card */}
            <motion.div
              className="bg-gradient-to-br from-navy to-navy/90 text-white p-6 rounded-xl shadow-lg border border-gold/20"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gold/20 p-2 rounded-lg">
                  <GraduationCap className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gold">Professional Details</h3>
              </div>
              <div className="space-y-3 ml-1">
                <div>
                  <p className="text-sm text-white/60 mb-1">Position</p>
                  <p className="font-semibold text-white">Associate Professor</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Department</p>
                  <p className="font-semibold text-white">Computer Science & Engineering</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Institution</p>
                  <p className="font-semibold text-white">Medicaps University, Indore</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Details Card */}
            <motion.div
              className="bg-white border-2 border-gold/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-navy/10 p-2 rounded-lg">
                  <Mail className="text-navy" size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy">Email</h3>
              </div>
              <div className="space-y-2 ml-1">
                <a 
                  href="mailto:latika.mehrotra@medicaps.ac.in"
                  className="block text-text hover:text-gold transition-colors font-medium"
                >
                  latika.mehrotra@medicaps.ac.in
                </a>
                <a 
                  href="mailto:Latika19mehrotra@gmail.com"
                  className="block text-text hover:text-gold transition-colors font-medium"
                >
                  Latika19mehrotra@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Office Address Card */}
            <motion.div
              className="bg-white border-2 border-navy/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-navy/10 p-2 rounded-lg">
                  <Building2 className="text-navy" size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy">Office Address</h3>
              </div>
              <div className="ml-1">
                <p className="text-text font-medium leading-relaxed">
                  V-127, V Block<br />
                  Department of Computer Science & Engineering<br />
                  Medicaps University<br />
                  Indore 453331, India
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
