import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ["Home", "About Us", "IFZA", "Meydan", "Contact"];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="/" className="logo">
                    SET<span className="logo-accent">KORP</span>
                    <div className="logo-dot"></div>
                </a>

                <div className="desktop-menu">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            className="nav-link"
                            whileHover={{ y: -2, color: "var(--accent-primary)" }}
                        >
                            {link}
                        </motion.a>
                    ))}
                    <motion.a
                        href="#"
                        className="btn-magnetic"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Cost Calculator
                    </motion.a>
                </div>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {navLinks.map((link, i) => (
                                <a key={i} href="#" onClick={() => setIsOpen(false)}>{link}</a>
                            ))}
                            <a href="#" className="btn-magnetic mobile" onClick={() => setIsOpen(false)}>Cost Calculator</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
