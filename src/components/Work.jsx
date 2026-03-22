import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: '01',
    title: 'Clique Flow',
    category: 'SaaS • Product Design',
    description:
      'A comprehensive workflow management system for creative teams looking for high-end scalability and collaborative efficiency.',
    link: '#',
    accent: '#3b82f6',
    bg: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.06) 100%)',
  },
  {
    id: '02',
    title: 'Nexus UI Kit',
    category: 'Design System • Enterprise',
    description:
      'A scalable design system for enterprise-grade applications with accessible components and systematic token architecture.',
    link: '#',
    accent: '#a855f7',
    bg: 'linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(236,72,153,0.06) 100%)',
  },
  {
    id: '03',
    title: 'Stellar Dash',
    category: 'Dashboard • Data Viz',
    description:
      'Real-time analytics dashboard with high-density data visualization, interactive filters and drill-through reports.',
    link: '#',
    accent: '#10b981',
    bg: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(6,182,212,0.06) 100%)',
  },
]

function ProjectCard({ project, isFirst }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      className={`card-hover project-card${isFirst ? ' project-card-first' : ''}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 32,
        border: '1px solid rgba(255,255,255,0.06)',
        background: '#0a0e18',
        padding: 8,
        cursor: 'pointer',
      }}
    >
      {/* Ghost number */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: -20,
          right: 8,
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 140,
          fontWeight: 900,
          color: 'rgba(255,255,255,0.025)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          transition: 'color 0.6s ease',
          zIndex: 0,
        }}
        className="project-ghost-num"
      >
        {project.id}
      </span>

      {/* Image placeholder */}
      <div
        className="project-img"
        style={{ background: project.bg, position: 'relative', overflow: 'hidden' }}
      >
        {/* Grid lines inside image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        {/* Centered accent dot cluster */}
        <div style={{ display: 'flex', gap: 8, zIndex: 1 }}>
          {[1,2,3].map(i => (
            <div key={i} style={{
              width: 8 + i * 4,
              height: 8 + i * 4,
              borderRadius: '50%',
              background: project.accent,
              opacity: 0.4 - i * 0.08,
            }} />
          ))}
        </div>
        {/* Project ID label */}
        <div style={{
          position: 'absolute',
          top: 20,
          left: 24,
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
        }}>
          {project.id}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '28px 32px 32px' }}>
        <div style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: '#f0a827',
          marginBottom: 12,
          fontFamily: "'Space Grotesk', sans-serif",
        }}>
          {project.category}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#fff',
            margin: 0,
          }}>
            {project.title}
          </h3>

          <a
            href={project.link}
            style={{
              flexShrink: 0,
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              textDecoration: 'none',
              transition: 'background 0.3s, border-color 0.3s, color 0.3s, transform 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#f0a827'
              e.currentTarget.style.borderColor = '#f0a827'
              e.currentTarget.style.color = '#000'
              e.currentTarget.style.transform = 'rotate(45deg)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.transform = 'rotate(0deg)'
            }}
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

        <p style={{
          fontSize: 15,
          color: 'rgba(255,255,255,0.42)',
          lineHeight: 1.65,
          marginTop: 12,
          maxWidth: '88%',
        }}>
          {project.description}
        </p>
      </div>

      {/* Hover: ghost number brightens via CSS */}
      <style>{`
        .project-card:hover .project-ghost-num {
          color: rgba(255,255,255,0.06) !important;
        }
      `}</style>
    </motion.div>
  )
}

export default function Work() {
  return (
    <section id="work" style={{ paddingTop: 128, paddingBottom: 128 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 72 }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 520 }}
        >
          <div className="section-label">Selected Work</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            margin: 0,
            color: '#fff',
          }}>
            Impactful Design<br />Case Studies.
          </h2>
        </motion.div>

        {/* Project grid */}
        <div
          className="work-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 24,
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} isFirst={i === 0} />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .work-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .work-grid .project-card-first {
            grid-column: span 2;
          }
          .work-grid .project-card-first .project-img {
            aspect-ratio: 21 / 9 !important;
          }
        }
      `}</style>
    </section>
  )
}
