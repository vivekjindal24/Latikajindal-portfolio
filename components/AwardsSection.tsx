"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const awards = [
  {
    title: "Srijan For Data Base Management System",
    session: "Academic Session 2013-2014",
  },
  {
    title: "Srijan For Object Oriented Programming",
    session: "Academic Session 2013-2014",
  },
  {
    title: "Srijan For Data Base Management System",
    session: "Academic Session 2014-2015",
  },
  {
    title: "Srijan For Cyber Security",
    session: "Academic Session 2017-2018",
  },
];

export default function AwardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="section-padding bg-background">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          Awards & Recognition
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg border-2 border-gold hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                  <Award className="text-gold" size={32} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-navy text-center mb-2 leading-tight">
                {award.title}
              </h3>
              <p className="text-sm text-text/70 text-center">{award.session}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
