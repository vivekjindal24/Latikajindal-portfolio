"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Ph.D. (Computer Science and Eng.)",
    institution: "Jaipur National University, Jaipur, India",
    year: "2019",
  },
  {
    degree: "M.TECH. (Computer Science and Eng.)",
    institution: "RGPV, Bhopal, India",
    year: "2012",
  },
  {
    degree: "B.E. (Computer Science and Eng.)",
    institution: "RGPV, Bhopal, India",
    year: "2008",
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-gold/5 via-white to-navy/5">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          Education
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-gradient-to-br from-navy to-navy/90 text-white p-8 rounded-lg shadow-xl hover:scale-105 transition-transform"
            >
              {/* Year badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg">
                <span className="text-navy font-bold text-lg">{edu.year}</span>
              </div>

              <div className="mb-4">
                <GraduationCap className="text-gold" size={40} />
              </div>

              <h3 className="text-xl font-bold mb-3 leading-tight">{edu.degree}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
