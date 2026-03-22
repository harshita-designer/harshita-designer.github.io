import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'

function App() {
    return (
        <div className="relative min-h-screen font-sans selection:bg-primary selection:text-black scroll-smooth">
            {/* Background Layers */}
            <div className="fixed inset-0 grid-background opacity-20 pointer-events-none" />
            <div className="fixed inset-0 radial-gradient-1 pointer-events-none" />
            <div className="fixed inset-0 radial-gradient-2 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <Navbar />
                <main>
                    <Hero />
                    <Work />
                    <Experience />
                    <Skills />
                    <Achievements />

                    <section id="contact" className="py-32 flex flex-col items-center text-center gap-8">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-wider">Contact</h2>
                        <p className="text-5xl md:text-7xl font-bold tracking-tight">Let's build <br /> something great.</p>
                        <p className="text-muted-foreground text-lg max-w-md">I am currently available for freelance opportunities and full-time positions.</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-primary transition-colors text-xl"
                        >
                            Get in Touch
                        </motion.button>
                    </section>
                </main>
                <footer className="py-12 text-center text-muted-foreground border-t border-white/5">
                    <p>© {new Date().getFullYear()} Harshita. Designed & Developed with passion.</p>
                </footer>
            </div>
        </div>
    )
}

export default App
