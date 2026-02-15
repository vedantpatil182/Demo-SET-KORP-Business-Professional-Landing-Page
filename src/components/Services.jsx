import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Building, ArrowUpRight } from 'lucide-react';
import './Services.css';

const Services = () => {
    return (
        <section className="services-section section-padding">
            <div className="container services-container">

                <div className="services-header">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Services Beyond <span className="stroke-text">Expectations</span>
                    </motion.h2>
                    <p>Transforming requirements into results.</p>
                </div>

                <div className="cards-wrapper">

                    <motion.div
                        className="glass-card service-card"
                        whileHover={{ y: -10, borderColor: "var(--accent-secondary)" }}
                    >
                        <div className="card-content">
                            <div className="icon-wrapper i-rocket">
                                <Rocket size={32} />
                            </div>
                            <h3>Incorporation</h3>
                            <p>Seamless business setup across Freezones and Mainland. We handle the bureaucracy, you handle the vision.</p>
                            <div className="card-footer">
                                <span>Explore</span>
                                <ArrowUpRight size={18} />
                            </div>
                        </div>
                        <div className="card-bg-glow glow-blue"></div>
                    </motion.div>

                    <motion.div
                        className="glass-card service-card"
                        whileHover={{ y: -10, borderColor: "var(--accent-tertiary)" }}
                    >
                        <div className="card-content">
                            <div className="icon-wrapper i-bank">
                                <Building size={32} />
                            </div>
                            <h3>Corporate Banking</h3>
                            <p>Top-tier financial connections. We facilitate relationships with UAE's reputable banking institutions.</p>
                            <div className="card-footer">
                                <span>Explore</span>
                                <ArrowUpRight size={18} />
                            </div>
                        </div>
                        <div className="card-bg-glow glow-purple"></div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Services;
