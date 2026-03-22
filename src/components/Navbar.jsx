import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const navItems = [
        { name: 'WORK', href: '#work' },
        { name: 'EXPERIENCE', href: '#experience' },
        { name: 'ACHIEVEMENTS', href: '#achievements' },
        { name: 'CONTACT', href: '#contact' },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-6 px-6 bg-background/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl w-full flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-lg font-bold tracking-[0.2em] font-heading flex items-center gap-2"
                >
                    HARSHITA <span className="text-primary">•</span> RAI
                </motion.div>

                <div className="hidden md:flex items-center gap-10">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-[12px] font-semibold tracking-widest text-muted-foreground hover:text-white transition-colors"
                        >
                            {item.name}
                        </motion.a>
                    ))}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-2.5 text-[12px] font-bold tracking-widest text-primary border border-primary/40 rounded-full hover:bg-primary/10 transition-all uppercase"
                    >
                        Resume
                    </motion.button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
