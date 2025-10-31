"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, Award } from "lucide-react";

const certifications = [
  "Coordinator's workshop on computer programming (IIT-B) participation certificate two-week workshop (21st-26th April 2014)",
  "Continuing education & Quality Improvement Program (IIT-B) participated in CEP Course on Coordinator's workshop on computer programming at Bombay (Two weeks 21st-26th April 2014)",
  "Introduction to design of algorithms (IIT-K) participation Certificate, two-week workshop conducted at Medi-Caps Institute of Technology and Management (27th-30th May 2015)",
  "Certificate of Excellence for being workshop coordinator on computer programming conducted by IIT-B from 20th May to 21st June 2014 at Medi-Caps Institute of Technology and Management",
  "Certificate of Excellence for being workshop Teaching Assistant on Computer Programming conducted by IIT-B from 28th May to 5th July 2014 at Medi-Caps Institute of Technology and Management",
  "Participant in a two-week ISTTE workshop on Introduction to research Methodology conducted by IIT-B on 25th June-4th July 2012",
  "Participated in two-day ISTE Workshop on Akash for Education conducted by IIT-B (10th & 11th May 2012)",
  "Organizer in two-day national workshop on Network simulation and design held on 11th-12th April 2014 at Medi-Caps Institute of Technology and Management",
  "Organizer of the 1st IEEE Symposium on CDAN held on 18th-19th March 2016 at Medi-Caps Institute of Technology and Management",
  "Publicity Head at Springer conference organized at Medi-Caps Institute of Technology and Management",
  "Part of Organizing committee at TEDX Medi-Caps University",
  "Certificate for participating in Faculty Development Program for Student Induction (FDP-SI) Conducted by AICTE during 9-15 July 2018 at IPS Academy, Indore",
  "SPOC for Medicaps University for TATA Strive Google Career Certification Program",
  "Conference Secretary to 2nd International Conference on computer communication and control 2024",
  "Expert Lecture in Bits Pilani Dubai on 22/08/2024",
  "Certificate for participating in Winter School Deep Learning for vision and language modeling IIT, Guwahati, Jan 6th-13th 2025",
  "Convener FDP Electronics & ICT Academy IIT Roorkee (HUB) on topic Recent Innovations in Communication Systems, AI ML and Biomedical Systems Jan 20-Jan 24, 2025 in Hybrid Mode at Medicaps University (Spoke)",
  "Convener FDP Electronics & ICT Academy IIIT Nagpur (HUB) on topic Empowering Educators with Generative AI Register June 28-July 10, 2025 In association with Medicaps University (Spoke)",
  "Various events conducted in university under the Banner of Techno Clubs as a head Techno Clubs",
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="certifications" className="section-padding bg-gradient-to-br from-white via-navy/5 to-gold/10">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          Trainings, Certifications & Events
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />

        <div className="max-w-4xl mx-auto space-y-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gradient-to-r from-white to-background rounded-lg border border-gray-200 overflow-hidden hover:border-gold hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex items-start gap-4 p-4 text-left hover:bg-gold/5 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <Award className="text-gold" size={20} />
                </div>
                <div className="flex-1">
                  <p className={`text-text ${expandedIndex === index ? 'font-semibold' : ''}`}>
                    {cert.length > 100 && expandedIndex !== index ? `${cert.substring(0, 100)}...` : cert}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
