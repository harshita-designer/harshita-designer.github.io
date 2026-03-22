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
        <section id="achievements" className="py-24 border-t border-white/5">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider">Achievements & Certifications</h2>
                    <p className="text-4xl md:text-5xl font-bold tracking-tight">Recognitions of <br /> my expertise.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 p-8 bg-muted/40 border border-white/5 rounded-3xl hover:bg-muted/60 hover:border-primary/20 transition-all group"
                        >
                            <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{item.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Achievements
