import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
    {
        id: '01',
        title: 'Clique Flow',
        category: 'SaaS • Product Design',
        description: 'A comprehensive workflow management system for creative teams.',
        link: '#',
        color: 'bg-blue-500/20',
    },
    {
        id: '02',
        title: 'Nexus UI Kit',
        category: 'Design System • Enterprise',
        description: 'A scalable design system for enterprise-grade applications.',
        link: '#',
        color: 'bg-purple-500/20',
    },
    {
        id: '03',
        title: 'Stellar Dash',
        category: 'Dashboard • Data Viz',
        description: 'Real-time analytics dashboard with high-density data visualization.',
        link: '#',
        color: 'bg-emerald-500/20',
    },
]

const ProjectCard = ({ project }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-muted/30 hover:border-primary/50 transition-colors"
    >
        <div className={`aspect-[16/10] w-full ${project.color} flex items-center justify-center`}>
            <span className="text-8xl font-black text-white/10 group-hover:scale-110 transition-transform duration-500">
                {project.id}
            </span>
        </div>

        <div className="p-8">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                </div>
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary group-hover:text-black transition-colors">
                    <ExternalLink className="w-5 h-5" />
                </div>
            </div>
            <p className="text-muted-foreground">{project.description}</p>
        </div>
    </motion.div>
)

const Work = () => {
    return (
        <section id="work" className="py-24">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider">Selected Work</h2>
                    <p className="text-4xl md:text-5xl font-bold tracking-tight">Case studies of <br /> my latest projects.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work
