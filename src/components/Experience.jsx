import React from 'react'
import { motion } from 'framer-motion'

const experience = [
    {
        company: 'Stellar Design',
        role: 'Senior Product Designer',
        period: '2022 - Present',
        description: 'Leading design for high-end SaaS products and enterprise solutions.',
    },
    {
        company: 'Nexus Creative',
        role: 'UI/UX Designer',
        period: '2020 - 2022',
        description: 'Developed scalable design systems and intuitive user interfaces.',
    },
    {
        company: 'Vertex Digital',
        role: 'Junior Designer',
        period: '2019 - 2020',
        description: 'Assisted in creating visual identities and digital assets for startups.',
    },
]

const ExperienceItem = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative pl-8 pb-12 border-l border-white/10 last:border-0"
    >
        <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-primary" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
            <h3 className="text-xl font-bold">{item.company}</h3>
            <span className="text-sm font-medium text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/5">{item.period}</span>
        </div>
        <div className="text-primary font-semibold mb-4">{item.role}</div>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.description}</p>
    </motion.div>
)

const Experience = () => {
    return (
        <section id="experience" className="py-24">
            <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Professional Experience</h2>
                    <p className="text-4xl font-bold tracking-tight">My journey <br /> so far.</p>
                </div>
                <div className="md:w-2/3">
                    {experience.map((item, index) => (
                        <ExperienceItem key={item.company} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
