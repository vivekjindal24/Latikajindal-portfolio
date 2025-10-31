"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Search, Mic, Heart, Lightbulb, Cpu, Music } from "lucide-react";

const hobbies = [
  { name: "Reading", icon: BookOpen },
  { name: "Researching Beyond Academics", icon: Search },
  { name: "Public Speaking & Debating", icon: Mic },
  { name: "Volunteering", icon: Heart },
  { name: "Creativity", icon: Lightbulb },
  { name: "Technology", icon: Cpu },
  { name: "Music", icon: Music },
];

export default function HobbiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hobbies" className="section-padding bg-white">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          Hobbies & Interests
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-4 bg-background rounded-lg hover:bg-gold/10 transition-all hover:scale-110 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-3 group-hover:bg-gold transition-colors">
                  <Icon className="text-gold group-hover:text-navy transition-colors" size={28} />
                </div>
                <p className="text-sm font-semibold text-navy">{hobby.name}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
