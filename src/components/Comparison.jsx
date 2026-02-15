import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import './Comparison.css';

const Comparison = () => {
    return (
        <section className="comparison-section section-padding">
            <div className="container comparison-container">

                <div className="comp-sidebar">
                    <h2>Chaos vs <span className="text-accent">Order</span></h2>
                    <p>Don't let complexity hold you back. We structure the unstructured.</p>
                </div>

                <div className="comp-visuals">
                    <div className="comp-box bad">
                        <h4>Without SetKorp</h4>
                        <div className="chaos-visual">
                            {/* Animated SVG Noise Lines */}
                            <svg viewBox="0 0 100 100" className="noise-svg">
                                <path d="M10,50 Q30,5 50,50 T90,50" stroke="#FF5A5F" fill="none" className="chaos-path p1" />
                                <path d="M10,30 Q40,90 60,30 T90,60" stroke="#888" fill="none" className="chaos-path p2" />
                                <path d="M20,60 Q50,0 70,70" stroke="#555" fill="none" className="chaos-path p3" />
                            </svg>
                        </div>
                        <p className="status-text">Overwhelmed & Confused</p>
                    </div>

                    <div className="vs-divider">
                        <div className="vs-circle">
                            <Zap size={24} color="black" fill="black" />
                        </div>
                    </div>

                    <motion.div
                        className="comp-box good"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h4>With SetKorp</h4>
                        <div className="order-visual">
                            <div className="grid-row">
                                <div className="grid-cell filled"></div>
                                <div className="grid-cell filled"></div>
                                <div className="grid-cell filled"></div>
                            </div>
                            <div className="grid-row">
                                <div className="grid-cell filled"></div>
                                <div className="grid-cell filled"></div>
                                <div className="grid-cell filled"></div>
                            </div>
                            <div className="grid-row">
                                <div className="grid-cell filled"></div>
                                <div className="grid-cell filled"></div>
                                <div className="grid-cell filled"></div>
                            </div>
                        </div>
                        <p className="status-text highlight">Aligned & Scalable</p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Comparison;
