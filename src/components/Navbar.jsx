import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const navItems = [
        { name: 'Work', href: '#work' },
        { name: 'Experience', href: '#experience' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between py-8 bg-background/80 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-bold tracking-tighter"
            >
                HARSHITA<span className="text-primary">.</span>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item, index) => (
                    <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                    >
                        {item.name}
                    </motion.a>
                ))}
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 text-sm font-semibold bg-white text-black rounded-full hover:bg-primary transition-colors"
                >
                    Resume
                </motion.button>
            </div>
        </nav>
    )
}

export default Navbar
