import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Briefcase, Clock, ShieldCheck } from 'lucide-react';
import './Values.css';

const valuesData = [
    {
        icon: <Megaphone size={28} />,
        title: "Clarity",
        desc: "Unwavering honesty in every action.",
        color: "#E0FF3F"
    },
    {
        icon: <Briefcase size={28} />,
        title: "Excellence",
        desc: "Forged by deep market specialization.",
        color: "#FF5A5F"
    },
    {
        icon: <Clock size={28} />,
        title: "Efficiency",
        desc: "Time and cost, masterfully aligned.",
        color: "#C28CFC"
    },
    {
        icon: <ShieldCheck size={28} />,
        title: "Trust",
        desc: "Transparency is our foundation.",
        color: "#4ECDC4"
    }
];

const Values = () => {
    return (
        <section className="values-section section-padding">
            <div className="container">
                <h3 className="values-heading">Our Core DNA</h3>

                <div className="values-grid">
                    {valuesData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="value-block"
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                        >
                            <div className="value-icon" style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <div className="value-content">
                                <h4 style={{ color: item.color }}>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
