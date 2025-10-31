"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Associate Professor",
    institution: "Medicaps University",
    location: "Indore, MP",
    duration: "Feb 2012 - Present (13+ Years)",
    description: "Working as an Associate Professor at Medicaps University, Indore in the Computer Science & Engineering Department since Feb 2012 (13+ Years)",
  },
  {
    title: "Assistant Professor",
    institution: "SKSITS",
    location: "Indore",
    period: "NOV 2011 – FEB 2012",
    description: "Served as Assistant Professor in Computer Science & Engineering Department",
  },
  {
    title: "Assistant Professor",
    institution: "SD Bansal College of Technology",
    location: "Indore",
    period: "2008 – 2009",
    description: "Served as Assistant Professor in Computer Science & Engineering Department",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-background">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-4" />
        <p className="text-center text-lg text-text/70 mb-12">15+ Years in Academia</p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-8 border-l-2 border-gold last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold border-4 border-background" />

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-1">{exp.title}</h3>
                    <p className="text-lg text-gold font-semibold flex items-center gap-2">
                      <Briefcase size={18} />
                      {exp.institution} | {exp.location}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-navy font-semibold rounded-lg">
                    <Calendar size={16} />
                    {exp.period}
                  </span>
                </div>
                <p className="text-text leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
