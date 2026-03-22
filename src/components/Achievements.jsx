import React from 'react'
import { motion } from 'framer-motion'
import { Award, ShieldCheck, Zap, Star } from 'lucide-react'

const achievements = [
  {
    title: 'Google UX Design',
    issuer: 'Google',
    sub: 'Professional Certificate',
    year: '2023',
    icon: ShieldCheck,
    accent: '#4285f4',
  },
  {
    title: 'Enterprise Design',
    issuer: 'IBM',
    sub: 'Master Practitioner',
    year: '2022',
    icon: Award,
    accent: '#0062ff',
  },
  {
    title: 'Advanced Interaction',
    issuer: 'Design Academy',
    sub: 'Interaction Design',
    year: '2021',
    icon: Zap,
    accent: '#f0a827',
  },
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{
        paddingTop: 128,
        paddingBottom: 128,
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 72 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 520 }}
        >
          <div className="section-label">Recognitions</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            margin: 0,
            color: '#fff',
          }}>
            Certifications &amp;<br />Achievements.
          </h2>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: 20,
        }} className="ach-grid">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              viewport={{ once: true, margin: '-40px' }}
              className="card-hover"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 40,
                padding: '40px 36px',
                background: '#0a0e18',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 36,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle accent gradient top corner */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${item.accent}18, transparent 70%)`,
                  pointerEvents: 'none',
                }}
              />

              {/* Icon */}
              <div
                className="ach-icon"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 18,
                  background: `${item.accent}15`,
                  color: item.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.35s, color 0.35s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = item.accent
                  e.currentTarget.style.color = '#000'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = `${item.accent}15`
                  e.currentTarget.style.color = item.accent
                }}
              >
                <item.icon size={26} />
              </div>

              {/* Text block */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: '#fff',
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    {item.title}
                  </h3>
                  <span style={{
                    flexShrink: 0,
                    padding: '4px 12px',
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 9999,
                    marginTop: 2,
                  }}>
                    {item.year}
                  </span>
                </div>

                <div style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginTop: 4,
                }}>
                  {item.issuer} · {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .ach-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
