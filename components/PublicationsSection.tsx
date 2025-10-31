"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    authors: "Bhavana Tiwari, Latika Jindal",
    title: "Neural Network-Based Early Detection of Wheat Stripe Rust Disease for Enhanced Crop Management",
    journal: "Ingenierie Des Systemes D Information 30(4), pp. 1067-1076",
    year: "2025",
    doi: "https://doi.org/10.18280/isi.300422",
    type: "Scopus Journal"
  },
  {
    authors: "Vivek Jindal, Latika Jindal, Kailash Chandra Bandhu and Ratnesh Litoriya",
    title: "Automating cricket scorecards with deep neural network: a next-generation approach",
    journal: "IET Conference Proceedings Volume 2025, Issue 7",
    year: "2025",
    doi: "https://doi.org/10.1049/icp.2025.1671",
    type: "Conference Proceedings"
  },
  {
    authors: "Jindal, L., Sharma, A., Prasad, K.D.V., Rivera, R., Karimovna, A.D.",
    title: "A machine learning method for predicting disease-associated microRNA connections using network internal topology data",
    journal: "Healthcare Analytics",
    year: "2023",
    doi: "https://doi.org/10.1016/j.health.2023.100215",
    type: "International Journal"
  },
  {
    authors: "Jindal, L., Doohan, N.V., Vaidya, S., Patel, H., Deo, A.",
    title: "Deep learning-based heat optimization techniques for forecasting indoor temperature changes",
    journal: "Spatial Information Research",
    year: "2023",
    doi: "https://doi.org/10.1007/s41324-023-00546-w",
    type: "International Journal"
  },
  {
    authors: "Shukla, K., Kollu, A., Panwar, P., Jindal, L., Keshta, I., Maaliw, R.R.",
    title: "Energy-efficient resource allocation over wireless communication systems through deep reinforcement learning",
    journal: "International Journal of Communication Systems",
    year: "2023",
    doi: "https://doi.org/10.1002/dac.5589",
    type: "International Journal"
  },
  {
    authors: "Latika Jindal, Harish Kumar, Yassine Aoudni, Geovanny Genaro Reivan Ortiz, Shahajan Miah and Rohit Tripathi",
    title: "Light Weighted CNN Model to Detect DDoS Attack over Distributed Scenario",
    journal: "Security and Communication Network",
    year: "2022",
    doi: "https://doi.org/10.1155/2022/7585457",
    type: "International Journal (Web of Science)"
  },
  {
    authors: "Byeon, Haewon, Tammina, Manoj Ram, Soni, Mukesh, Kuzieva, Nargiza, Jindal, Latika, Keshta, Ismail, Kulkarni, Mrunalini Harish",
    title: "Enhancing online health consultations through fuzzy logic-integrated attribute-based encryption system",
    journal: "Journal of Intelligent & Fuzzy Systems",
    year: "2024",
    doi: "10.3233/JIFS-235893",
    type: "International Journal"
  },
  {
    authors: "Nikhil Kumar Singh, Sanjay Agal, Thippa Reddy Gadekallu, Mohammad Shabaz, Ismail Keshta, Latika Jindal, Mukesh Soni, Haewon Byeon, and Pavitar Parkash Singh",
    title: "Deep Learning Model for Interpretability and Explainability of Aspect-Level Sentiment Analysis Based on Social Media",
    journal: "IEEE Transactions on Computational Social Systems",
    year: "2024",
    doi: "10.1109/TCSS.2023.3347664",
    type: "International Journal"
  },
  {
    authors: "Mehrotra, L., Saxena, P. S., & Doohan, N. V.",
    title: "A Data Classification Model: For Effective Classification of Intrusion in an Intrusion Detection System Based on Decision Tree Learning Algorithm",
    journal: "Lecture Notes in Networks and Systems (LNNS, volume 9), Springer, Singapore",
    year: "2017",
    doi: "https://doi.org/10.1007/978-981-10-3932-4_7",
    type: "Book Chapter"
  },
  {
    authors: "Mehrotra, L., Saxena, P. S., & Doohan, N. V.",
    title: "Implementation of Modified ID3 Algorithm",
    journal: "Lecture Notes in Networks and Systems (LNNS, volume 9), Springer, Singapore",
    year: "2017",
    doi: "https://doi.org/10.1007/978-981-10-3932-4_6",
    type: "Book Chapter"
  },
  {
    authors: "Mehrotra, L., & Saxena, P. S.",
    title: "An Assessment Report on: Statistics-Based and Signature-Based Intrusion Detection Techniques",
    journal: "Advances in Intelligent Systems and Computing (AISC, volume 625), Springer, Singapore",
    year: "2017",
    doi: "https://doi.org/10.1007/978-981-10-5508-9_31",
    type: "Conference Paper"
  },
  {
    authors: "Latika Jindal, Sumit Kumar, Chetna Kaushal, Manisha Bhende, Anuradha Thakare, Mohammad Shabaz",
    title: "Aspect-based sentiment analysis employing linguistics content over social media for Web of Things",
    journal: "IET Communications",
    year: "2022",
    doi: "https://doi.org/10.1049/cmu2.12538",
    type: "International Journal (Web of Science)"
  },
  {
    authors: "Holkar, N. S., & Mehrotra, L.",
    title: "Analysis of Power Utilization and different Routing Protocols in Mobile Ad Hoc Network (MANET)",
    journal: "International Journal of Advanced Research in Computer Engineering & Technology (IJARCET)",
    year: "",
    doi: "",
    type: "Book Chapter"
  },
  {
    authors: "Mehrotra L",
    title: "High Tech Trash: Facts Figures and Recycling",
    journal: "Green computing and E-pragati",
    year: "",
    doi: "",
    type: "National Conference"
  },
  {
    authors: "Mehrotra L",
    title: "Green computing: a social responsibility of Government Product Manufactures and Customers",
    journal: "Recent trends in computational Intelligence national workshop at CIIT",
    year: "",
    doi: "",
    type: "National Workshop"
  },
  {
    authors: "Mehrotra L",
    title: "Analysis of power utilization and different routing protocols in mobile AD Hoc Network (MANET)",
    journal: "Current trends in cloud computing and big data national conference at JNU, Jaipur",
    year: "",
    doi: "",
    type: "National Conference"
  },
];

export default function PublicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  
  const displayedPublications = showAll ? publications : publications.slice(0, 6);

  return (
    <section id="publications" className="section-padding bg-gradient-to-br from-navy/5 via-white to-gold/5">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          Research Publications
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-4" />
        <p className="text-center text-lg text-text/70 mb-12">16 Publications in International Journals, Conferences & Book Chapters</p>

        <div className="max-w-6xl mx-auto space-y-6">
          {displayedPublications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gradient-to-r from-white to-gold/5 p-6 rounded-lg border-l-4 border-gold hover:shadow-xl hover:border-navy transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <FileText className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-bold text-navy leading-tight flex-1">
                      {pub.title}
                    </h3>
                    {pub.year && (
                      <span className="flex-shrink-0 px-3 py-1 bg-navy text-gold text-sm font-semibold rounded-full">
                        {pub.year}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text/70 mb-2">
                    <strong>Authors:</strong> {pub.authors}
                  </p>
                  <p className="text-sm text-text/80 mb-2">
                    <strong>Published in:</strong> {pub.journal}
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-xs px-3 py-1 bg-gold/20 text-navy font-semibold rounded">
                      {pub.type}
                    </span>
                    {pub.doi && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-gold hover:underline"
                      >
                        <ExternalLink size={14} />
                        DOI Link
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {publications.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy/90 transition-all hover:scale-105"
            >
              {showAll ? "Show Less" : `Show All ${publications.length} Publications`}
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
