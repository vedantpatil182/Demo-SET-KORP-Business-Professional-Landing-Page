import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import './Welcome.css';

const industries = [
    "Holding Companies", "Trading Companies",
    "Media and Marketing", "Project Management",
    "Energy Sector", "Consulting Firms",
    "Software & Tech", "Event Management"
];

const Welcome = () => {
    return (
        <section className="welcome-section section-padding">
            <div className="container welcome-container">

                <div className="welcome-content">
                    <motion.h4
                        className="welcome-subtitle"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
            // WELCOME TO THE FUTURE
                    </motion.h4>

                    <motion.h2
                        className="welcome-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Gateway to Seamless <br />
                        <span className="text-gradient">Business Mastery.</span>
                    </motion.h2>

                    <p className="welcome-desc">
                        At Setkorp, we don't just set up companies; we engineer success.
                        Providing comprehensive support with radical transparency and
                        accelerated solutions.
                    </p>

                    <div className="industries-grid">
                        {industries.map((item, index) => (
                            <motion.div
                                key={index}
                                className="industry-item"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                whileHover={{ x: 5, color: "var(--accent-primary)" }}
                            >
                                <div className="check-box">
                                    <Check size={14} color="black" />
                                </div>
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.a
                        href="#"
                        className="btn-link"
                        whileHover={{ x: 10 }}
                    >
                        Learn more about us <ArrowRight size={16} />
                    </motion.a>
                </div>

                <div className="welcome-visual">
                    {/* Abstract Wireframe Globe/Structure */}
                    <div className="wireframe-structure">
                        <div className="ring r1"></div>
                        <div className="ring r2"></div>
                        <div className="ring r3"></div>
                        <div className="center-core"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Welcome;
