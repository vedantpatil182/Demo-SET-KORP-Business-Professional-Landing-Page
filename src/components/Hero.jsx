import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="hero">
            <div className="hero-bg-gradient"></div>

            <div className="container hero-grid">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span>Dubai's Premium Setup Partner</span>
                    </motion.div>

                    <h1>
                        <span className="word-reveal">Where</span><br />
                        <span className="word-reveal highlight">Challenges</span><br />
                        <span className="word-reveal">Find Solutions.</span>
                    </h1>

                    <p>
                        Setkorp is your strategic partner in prosperity. We transcend traditional setup services to forge your entrepreneurial legacy in the vibrant metropolis of Dubai.
                    </p>

                    <div className="hero-actions">
                        <button className="btn-hero-primary">
                            Start Journey <ArrowDownRight size={18} />
                        </button>
                        <button className="btn-hero-secondary">
                            Explore Services
                        </button>
                    </div>
                </motion.div>

                <div className="hero-visual">
                    {/* Abstract Art Composition */}
                    <motion.div className="art-composition" style={{ y: y1 }}>
                        <div className="glass-card c1"></div>
                        <div className="neon-circle"></div>
                        <div className="stat-card">
                            <span className="stat-val">100%</span>
                            <span className="stat-label">Transparency via Trust</span>
                        </div>
                        {/* The 'Building' abstract representation */}
                        <div className="abstract-building">
                            <div className="building-slice s1"></div>
                            <div className="building-slice s2"></div>
                            <div className="building-slice s3"></div>
                        </div>
                    </motion.div>

                    <motion.div className="floating-elements" style={{ y: y2 }}>
                        <div className="float-orb o1"></div>
                        <div className="float-orb o2"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
