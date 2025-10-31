"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Download, GraduationCap, FileText } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-background -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 -z-10" />

      <motion.div
        className="container-custom section-padding text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Dr. Latika Jindal
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gold mb-4"
        >
          Associate Professor
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto"
        >
          Department of Computer Science & Engineering
          <br />
          Medicaps University, Indore
        </motion.p>

                <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          &ldquo;Versatile academic with 15+ years of teaching, research, and innovation in emerging technologies.&rdquo;
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://in.linkedin.com/in/dr-latika-jindal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-all hover:scale-105"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href="mailto:latika.mehrotra@medicaps.ac.in"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-all hover:scale-105"
          >
            <Mail size={20} />
            Email Me
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-all hover:scale-105"
          >
            <Download size={20} />
            Download CV
          </a>

          <a
            href="https://scholar.google.com/citations?user=4rJX49MAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-navy transition-all hover:scale-105"
          >
            <GraduationCap size={20} />
            Google Scholar
          </a>

          <a
            href="https://orcid.org/0000-0003-1773-2171"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-navy transition-all hover:scale-105"
          >
            <FileText size={20} />
            ORCID
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <a
            href="#about"
            className="inline-block animate-bounce"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
