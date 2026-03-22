import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
    return (
        <section className="pt-24 pb-32">
            <div className="flex flex-col items-start gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Available for new projects
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]"
                >
                    Designing <br />
                    <span className="text-muted-foreground italic">Digital</span> <br />
                    <span className="bg-gradient-to-r from-primary to-yellow-600 bg-clip-text text-transparent">Experiences.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
                >
                    Hi, I am Harshita. A designer and developer focused on building high-end, scalpable interfaces for SaaS and Enterprise UX.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4 mt-4"
                >
                    <button className="group relative flex items-center gap-2 px-8 py-4 text-sm font-bold bg-primary text-black rounded-full overflow-hidden transition-all hover:pr-10">
                        View Projects
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                    <button className="px-8 py-4 text-sm font-bold bg-transparent text-white border border-white/10 rounded-full hover:bg-white/5 transition-all">
                        Say Hello
                    </button>
                </motion.div>
            </div>

            {/* Floating Badge (Similar to original) */}
            <motion.div
                initial={{ opacity: 0, rotate: -12, scale: 0.5 }}
                animate={{ opacity: 1, rotate: -12, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="hidden lg:block absolute top-[40%] right-[10%] p-6 bg-muted border border-white/10 rounded-2xl shadow-2xl backdrop-blur-sm -rotate-12"
            >
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Years Experience</div>
            </motion.div>
        </section>
    )
}

export default Hero
