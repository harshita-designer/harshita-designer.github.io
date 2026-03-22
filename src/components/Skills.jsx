import React from 'react'
import { motion } from 'framer-motion'
import { Figma, Laptop, Palette, Code, Layers, Smartphone } from 'lucide-react'

const skills = [
    { name: 'Product Design', icon: Laptop },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'Design Systems', icon: Layers },
    { name: 'Responsive Design', icon: Smartphone },
    { name: 'Prototyping', icon: Figma },
    { name: 'Development', icon: Code },
]

const toolstack = [
    'Figma', 'Miro', 'Adobe CC', 'Webflow', 'React', 'Framer Motion', 'Tailwind', 'Notion', 'Linear'
]

const Skills = () => {
    return (
        <section id="skills" className="py-24">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col md:flex-row justify-between gap-8 items-start">
                    <div className="max-w-md">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Core Skills</h2>
                        <p className="text-4xl font-bold tracking-tight mb-6">Expertise in <br /> modern design.</p>
                        <p className="text-muted-foreground leading-relaxed">I help companies build products that are not only beautiful but also functional and accessible.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 p-4 bg-muted/40 border border-white/5 rounded-2xl hover:border-primary/30 transition-colors"
                            >
                                <skill.icon className="w-5 h-5 text-primary" />
                                <span className="text-sm font-semibold tracking-tight">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5">
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">Toolstack</h3>
                    <div className="flex flex-wrap gap-3">
                        {toolstack.map((tool, index) => (
                            <motion.span
                                key={tool}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="px-4 py-2 text-xs font-bold bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors pointer-events-none"
                            >
                                {tool}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
