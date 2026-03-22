import React from 'react'
import { motion } from 'framer-motion'
import { Award, ShieldCheck, Zap } from 'lucide-react'

const achievements = [
    {
        title: 'Google UX Design',
        issuer: 'Google • Professional Certificate',
        icon: ShieldCheck,
    },
    {
        title: 'Enterprise Design',
        issuer: 'IBM • Master Practitioner',
        icon: Award,
    },
    {
        title: 'Advanced Interaction',
        issuer: 'Design Academy',
        icon: Zap,
    },
]

const Achievements = () => {
    return (
        <section id="achievements" className="py-32 border-t border-white/5">
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-6 max-w-xl">
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-8 bg-primary/50" />
                        <span className="text-[12px] font-bold text-primary uppercase tracking-[0.2em]">Recognitions</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold font-heading tracking-tight leading-[0.95]">Certifications & <br /> Achievements.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-start gap-8 p-10 bg-card border border-white/5 rounded-[40px] hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-2xl font-bold font-heading leading-tight">{item.title}</h3>
                                <p className="text-[14px] text-muted-foreground font-medium uppercase tracking-widest mt-1">{item.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Achievements
