import React from 'react'
import { motion } from 'framer-motion'

const experience = [
  {
    company: 'Stellar Design',
    role: 'Senior Product Designer',
    period: '2022 – Present',
    description:
      'Leading design for high-end SaaS products and enterprise solutions with a focus on scalable systems and user-centric architecture. Spearheaded the complete overhaul of core product UX, resulting in a 40% improvement in user retention.',
  },
  {
    company: 'Nexus Creative',
    role: 'UI/UX Designer',
    period: '2020 – 2022',
    description:
      'Developed scalable design systems and intuitive user interfaces for a diverse range of clients from startups to Fortune 500s. Established component libraries used across 12 product lines.',
  },
  {
    company: 'Vertex Digital',
    role: 'Junior Designer',
    period: '2019 – 2020',
    description:
      'Assisted in creating visual identities and digital assets for startups, learning the ropes of professional design work and building a strong foundation in accessibility-first design thinking.',
  },
]

function ExperienceItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      viewport={{ once: true, margin: '-60px' }}
      className="timeline-line"
    >
      <div className="timeline-dot" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Period badge */}
        <div>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 9999,
          }}>
            {item.period}
          </span>
        </div>

        {/* Company */}
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(22px, 3vw, 32px)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: '#fff',
          margin: 0,
          marginTop: 8,
        }}>
          {item.company}
        </h3>

        {/* Role */}
        <div style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#f0a827',
          marginTop: 2,
        }}>
          {item.role}
        </div>

        {/* Description */}
        <p style={{
          fontSize: 16,
          color: 'rgba(255,255,255,0.42)',
          lineHeight: 1.7,
          maxWidth: 640,
          marginTop: 12,
        }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" style={{ paddingTop: 128, paddingBottom: 128 }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 72,
      }}>

        {/* Two-column layout header + timeline */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 64,
        }} className="exp-layout">

          {/* Left: section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="exp-header"
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <div className="section-label">Career Journey</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              margin: 0,
              color: '#fff',
            }}>
              Professional<br />Experience.
            </h2>
            <p style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.42)',
              lineHeight: 1.65,
              maxWidth: 340,
              marginTop: 8,
            }}>
              Merging design thinking with technical expertise to build products that matter.
            </p>
          </motion.div>

          {/* Right: timeline */}
          <div className="exp-timeline" style={{ paddingTop: 4 }}>
            {experience.map((item, i) => (
              <ExperienceItem key={item.company} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .exp-layout {
            flex-direction: row !important;
            align-items: flex-start;
          }
          .exp-header {
            width: 36%;
            flex-shrink: 0;
            position: sticky;
            top: 100px;
          }
          .exp-timeline {
            flex: 1;
          }
        }
      `}</style>
    </section>
  )
}
