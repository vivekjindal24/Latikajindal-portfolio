"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FileCheck, Users, MapPin } from "lucide-react";

const patents = [
  {
    title: "Blockchain and IOT's role in the Indian banking sector's digital transition and development of integrated digital backing system with E-commerce platform",
    inventors: "Dr. S. Ahmad Murtaza Alvi Motashim Rasool, Dr. Latika Jindal, Dr. Shweta singh Samrat Ray, Dr. Sheshang Degadwala",
    applicant: "Dr. S. Ahmad Murtaza Alvi",
    applicationNo: "202211014117 A",
    status: "Published",
    country: "India"
  },
  {
    title: "A novel system for mental health tracking using naive bayes classifier model",
    inventors: "Dr. Latika Jindal, Dr. Kailash Chandra Bandhu, Dr. Prabin Kumar Panigrahi, Dr. Ratnesh Litoriya, Mr. Sanket Gupta, Ms. Kriti Joshi, Ms. Divya Kumawat",
    applicant: "Dr. Ratnesh Litoriya",
    applicationNo: "202321076104 A",
    status: "Published",
    country: "India"
  },
  {
    title: "A blockchain enabled system for securing financial transactions in crypto currency market",
    inventors: "Dr. Latika Jindal, Kriti Joshi, Mrs. Swati Sumit Vaidya",
    applicant: "Dr. Latika Jindal",
    applicationNo: "202321055713 A",
    status: "Published",
    country: "India"
  },
  {
    title: "A Hybrid Blockchain Architecture Employing ML Models for Real-time Fraud Detection",
    inventors: "Dr. Latika Jindal, Ms. Bhavna Tiwari, Mrs. Swati Sumit Vaidya, Mr Sumit Vaidya, Vivek Jindal",
    applicant: "Dr. Latika Jindal",
    applicationNo: "202421088334",
    status: "Published",
    country: "India"
  },
  {
    title: "A Wheat Stripe Rust Disease Detection System Using CNN and Ensemble Learning for improved Diagnostic Accuracy",
    inventors: "Ms. Bhavna Tiwari, Dr. Latika Jindal, Mrs. Swati Sumit Vaidya, Mr Sumit Vaidya",
    applicant: "Ms. Bhavna Tiwari",
    applicationNo: "202421089354",
    status: "Published",
    country: "India"
  },
  {
    title: "An Intelligent Diabetic Retinopathy Detection System Using Deep Learning Techniques",
    inventors: "Mrs. Swati Sumit Vaidya, Dr. Latika Jindal, Ms. Bhavna Tiwari, Mr Sumit Vaidya",
    applicant: "Mrs. Swati Sumit Vaidya",
    applicationNo: "202421091831 A",
    status: "Published",
    country: "India"
  }
];

export default function PatentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="patents" className="section-padding bg-background">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          Patents
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-4" />
        <p className="text-center text-lg text-text/70 mb-12">6 Published Patents in India</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {patents.map((patent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all border-t-4 border-gold relative overflow-hidden"
            >
              {/* Patent Number Badge */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                <span className="text-gold font-bold text-lg">{index + 1}</span>
              </div>

              <div className="mb-4 pt-8">
                <FileCheck className="text-gold mb-3" size={32} />
                <h3 className="text-base font-bold text-navy leading-tight mb-4 pr-8">
                  {patent.title}
                </h3>
              </div>

              <div
                className={`space-y-3 text-sm transition-all ${
                  hoveredIndex === index ? "block" : "block"
                }`}
              >
                <div className="flex items-start gap-2">
                  <Users className="text-gold flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="text-xs text-text/60 font-semibold">Inventors</p>
                    <p className="text-text/80 text-xs leading-tight">{patent.inventors}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-text/60 font-semibold">Application No.</span>
                    <span className="text-xs font-mono bg-navy/10 px-2 py-1 rounded">
                      {patent.applicationNo}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-text/60 font-semibold">Status</span>
                    <span className="text-xs px-3 py-1 bg-gold/20 text-navy font-semibold rounded-full">
                      {patent.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-text/60 font-semibold">Country</span>
                    <span className="text-xs flex items-center gap-1">
                      <MapPin size={12} className="text-gold" />
                      {patent.country}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
