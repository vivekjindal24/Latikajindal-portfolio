"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";

const programs = [
  {
    title: "Blue Prism",
    description: "Robotic Process Automation Certification Program",
  },
  {
    title: "Coursera Blockchain",
    description: "Blockchain Technology Specialization Program",
  },
];

export default function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="section-padding bg-background">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          Programs & Workshops
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-gold"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-gold" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-navy">{program.title}</h3>
              </div>
              <p className="text-text/70 leading-relaxed">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
