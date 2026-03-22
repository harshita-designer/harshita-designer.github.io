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
        <div className="relative min-h-screen font-sans selection:bg-primary selection:text-black scroll-smooth bg-background text-foreground overflow-x-hidden">
            {/* Background Layers */}
            <div className="fixed inset-0 grid-background opacity-40 pointer-events-none" />
            <div className="fixed inset-0 hero-glow pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                <Navbar />
                <main>
                    <Hero />
                    <Work />
                    <Experience />
                    <Skills />
                    <Achievements />

                    {/* High-Fidelity Contact Section */}
                    <section id="contact" className="py-44 flex flex-col items-center text-center gap-12 border-t border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-8 bg-primary/50" />
                            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.2em]">Get In Touch</span>
                        </div>
                        <h2 className="text-6xl md:text-[100px] font-bold font-heading tracking-tight leading-[0.85]">Let's build <br /> something great.</h2>
                        <p className="text-muted-foreground text-[20px] max-w-lg leading-relaxed mt-4 font-medium">I am currently available for high-end freelance opportunities and strategic full-time positions.</p>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-6 px-12 py-6 bg-white text-black font-bold rounded-full hover:bg-primary transition-all text-[16px] tracking-widest uppercase shadow-2xl shadow-white/5"
                        >
                            Start a Conversation
                        </motion.button>
                    </section>
                </main>

                <footer className="py-16 text-center border-t border-white/5">
                    <div className="flex flex-col items-center gap-6">
                        <div className="text-[14px] font-bold tracking-[0.2em] font-heading">
                            HARSHITA <span className="text-primary">•</span> RAI
                        </div>
                        <p className="text-[12px] text-muted-foreground uppercase tracking-widest font-medium">
                            © {new Date().getFullYear()} • Designed & Developed with passion.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default App
