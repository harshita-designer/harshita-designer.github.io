import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative pt-44 pb-32 hero-glow">
            <div className="flex flex-col items-start gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3"
                >
                    <div className="h-[1px] w-8 bg-primary/50" />
                    <span className="text-[12px] font-bold tracking-[0.2em] text-primary uppercase">
                        Available for new projects
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-7xl md:text-[120px] font-bold font-heading tracking-[-0.04em] leading-[0.85] text-white"
                >
                    HARSHITA <br />
                    <span className="text-muted-foreground mr-4">RAI</span>
                    <span className="inline-block w-4 h-4 rounded-full bg-primary mb-2" />
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-2xl text-[18px] md:text-[22px] text-muted-foreground leading-relaxed font-medium mt-4"
                >
                    I'm a digital designer and developer focused on building high-end, scalable interfaces for SaaS and Enterprise UX.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex items-center gap-6 mt-6"
                >
                    <button className="group relative flex items-center gap-3 px-10 py-5 text-[14px] font-bold tracking-widest bg-white text-black rounded-full hover:bg-primary transition-all uppercase">
                        View Projects
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                    <button className="px-10 py-5 text-[14px] font-bold tracking-widest text-white border border-white/20 rounded-full hover:bg-white/5 transition-all uppercase">
                        Say Hello
                    </button>
                </motion.div>
            </div>

            {/* Experience Floating Info */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -5 }}
                transition={{ delay: 0.5 }}
                className="hidden lg:flex absolute top-[35%] right-[5%] flex-col p-8 bg-card border border-white/10 rounded-[32px] shadow-2xl backdrop-blur-sm -rotate-6"
            >
                <div className="text-5xl font-bold text-primary font-heading">4+</div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-2">Years Experience</div>
            </motion.div>
        </section>
    )
}

export default Hero
