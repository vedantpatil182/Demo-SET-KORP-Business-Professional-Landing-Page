import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Comparison from './components/Comparison';
import Services from './components/Services';
import Values from './components/Values';

function App() {
    useEffect(() => {
        const dot = document.querySelector('.cursor-dot');
        const outline = document.querySelector('.cursor-outline');

        const moveCursor = (e) => {
            const { clientX, clientY } = e;
            dot.style.left = `${clientX}px`;
            dot.style.top = `${clientY}px`;

            outline.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 500, fill: "forwards" });
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div className="App">
            <div className="noise-overlay"></div>
            <div className="cursor-dot"></div>
            <div className="cursor-outline"></div>
            <Navbar />
            <Hero />
            <Welcome />
            <Comparison />
            <Services />
            <Values />
            <footer style={{ textAlign: 'center', padding: '4rem 2rem', borderTop: '1px solid #222', color: '#666', fontSize: '0.9rem' }}>
                <p>© 2024 SetKorp. Designed for the Future.</p>
            </footer>
        </div>
    );
}

export default App;
