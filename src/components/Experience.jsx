import React from 'react'
import { motion } from 'framer-motion'

const experience = [
    {
        company: 'Stellar Design',
        role: 'Senior Product Designer',
        period: '2022 - Present',
        description: 'Leading design for high-end SaaS products and enterprise solutions with a focus on scalable systems and user-centric architecture.',
    },
    {
        company: 'Nexus Creative',
        role: 'UI/UX Designer',
        period: '2020 - 2022',
        description: 'Developed scalable design systems and intuitive user interfaces for a diverse range of clients from startups to Fortune 500s.',
    },
    {
        company: 'Vertex Digital',
        role: 'Junior Designer',
        period: '2019 - 2020',
        description: 'Assisted in creating visual identities and digital assets for startups, learning the ropes of professional design work.',
    },
]

const ExperienceItem = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative pl-12 pb-16 border-l border-white/5 last:border-0"
    >
        <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/10" />

        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
                <span className="text-[12px] font-bold text-muted-foreground bg-white/5 border border-white/10 px-4 py-1.5 rounded-full tracking-widest uppercase">
                    {item.period}
                </span>
            </div>
            <h3 className="text-3xl font-bold font-heading mt-2">{item.company}</h3>
            <div className="text-primary font-bold tracking-widest text-[14px] uppercase mt-1">{item.role}</div>
            <p className="text-muted-foreground text-[17px] leading-relaxed max-w-3xl mt-4">{item.description}</p>
        </div>
    </motion.div>
)

const Experience = () => {
    return (
        <section id="experience" className="py-32">
            <div className="flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/3 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-8 bg-primary/50" />
                        <span className="text-[12px] font-bold text-primary uppercase tracking-[0.2em]">Career Journey</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold font-heading tracking-tight leading-[0.95]">Professional <br /> Experience.</h2>
                    <p className="text-muted-foreground text-[18px] max-w-sm mt-4">Merging design thinking with technical expertise to build products that matter.</p>
                </div>

                <div className="lg:w-2/3 pt-4">
                    {experience.map((item, index) => (
                        <ExperienceItem key={item.company} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
