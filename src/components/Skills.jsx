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
        <section id="skills" className="py-32">
            <div className="flex flex-col gap-20">
                <div className="flex flex-col md:flex-row justify-between gap-12 items-start">
                    <div className="max-w-md flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-8 bg-primary/50" />
                            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.2em]">Expertise</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold font-heading tracking-tight leading-[0.95]">Core <br /> Toolkit.</h2>
                        <p className="text-muted-foreground text-[18px] leading-relaxed">I help companies build products that are not only beautiful but also functional and accessible at scale.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-auto">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-4 p-8 bg-card border border-white/5 rounded-[32px] hover:border-primary/30 transition-all group"
                            >
                                <div className="p-4 w-fit rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                    <skill.icon className="w-6 h-6" />
                                </div>
                                <span className="text-[14px] font-bold tracking-widest uppercase mt-2">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5">
                    <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em] mb-10">Software & Technologies</h3>
                    <div className="flex flex-wrap gap-4">
                        {toolstack.map((tool, index) => (
                            <motion.span
                                key={tool}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="px-6 py-3 text-[12px] font-bold bg-muted/30 border border-white/5 rounded-full hover:bg-muted/50 transition-all uppercase tracking-widest text-muted-foreground hover:text-white"
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
