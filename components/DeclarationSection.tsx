"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function DeclarationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="declaration" className="section-padding bg-navy">
      <motion.div
        ref={ref}
        className="container-custom max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <Quote className="text-gold mx-auto mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Declaration
          </h2>
                  <motion.blockquote
          className="text-lg md:text-xl text-text italic border-l-4 border-gold pl-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>
            &ldquo;All the information furnished by me hereunder is correct to the best of my knowledge and belief.&rdquo;
          </p>
        </motion.blockquote>
          <p className="text-2xl font-bold text-gold">— Dr. Latika Jindal</p>
        </div>
      </motion.div>
    </section>
  );
}
