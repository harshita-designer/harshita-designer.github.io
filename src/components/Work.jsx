import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
    {
        id: '01',
        title: 'Clique Flow',
        category: 'SaaS • Product Design',
        description: 'A comprehensive workflow management system for creative teams looking for high-end scalability.',
        link: '#',
        image: 'bg-blue-600/10',
    },
    {
        id: '02',
        title: 'Nexus UI Kit',
        category: 'Design System • Enterprise',
        description: 'A scalable design system for enterprise-grade applications with accessible components.',
        link: '#',
        image: 'bg-purple-600/10',
    },
    {
        id: '03',
        title: 'Stellar Dash',
        category: 'Dashboard • Data Viz',
        description: 'Real-time analytics dashboard with high-density data visualization and interactive filters.',
        link: '#',
        image: 'bg-emerald-600/10',
    },
]

const ProjectCard = ({ project }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-card p-2 hover:border-primary/20 transition-all duration-500"
    >
        {/* Transparent Index Number */}
        <span className="absolute -top-12 -right-4 text-[120px] font-black font-heading text-white opacity-[0.03] select-none group-hover:opacity-[0.08] transition-opacity duration-700">
            {project.id}
        </span>

        <div className={`aspect-[16/10] w-full rounded-[28px] ${project.image} flex items-center justify-center overflow-hidden`}>
            <div className="w-full h-full transform transition-transform duration-700 group-hover:scale-110" />
        </div>

        <div className="p-8 pt-10">
            <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] font-heading">{project.category}</span>
                <div className="flex justify-between items-center group/title">
                    <h3 className="text-3xl font-bold font-heading tracking-tight">{project.title}</h3>
                    <div className="p-3 rounded-full border border-white/10 group-hover:bg-primary group-hover:text-black transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
                <p className="text-muted-foreground text-[16px] leading-[1.6] mt-2 max-w-[90%]">{project.description}</p>
            </div>
        </div>
    </motion.div>
)

const Work = () => {
    return (
        <section id="work" className="py-32">
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-6 max-w-xl">
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-8 bg-primary/50" />
                        <span className="text-[12px] font-bold text-primary uppercase tracking-[0.2em]">Selected Work</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold font-heading tracking-tight leading-[0.95]">Impactful Design <br /> Case Studies.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work
