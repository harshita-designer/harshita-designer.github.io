import React from 'react'
import { motion } from 'framer-motion'
import { Figma, Monitor, Palette, Code, Layers, Smartphone, PenTool, BarChart3 } from 'lucide-react'

const skills = [
  { name: 'Product Design',     icon: Monitor },
  { name: 'UI/UX Design',       icon: Palette },
  { name: 'Design Systems',     icon: Layers },
  { name: 'Responsive Design',  icon: Smartphone },
  { name: 'Prototyping',        icon: Figma },
  { name: 'Development',        icon: Code },
]

const toolstack = [
  'Figma', 'Miro', 'Adobe CC', 'Webflow',
  'React', 'Framer Motion', 'Tailwind', 'Notion', 'Linear',
  'Jira', 'Zeroheight', 'Storybook',
]

// Duplicate for seamless marquee loop
const marqueeItems = [...toolstack, ...toolstack]

export default function Skills() {
  return (
    <section id="skills" style={{ paddingTop: 128, paddingBottom: 128 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>

        {/* ── Top row: label+heading left, skill cards right ── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 56,
          alignItems: 'flex-start',
        }} className="skills-top">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="skills-header"
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <div className="section-label">Expertise</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              margin: 0,
              color: '#fff',
            }}>
              Core<br />Toolkit.
            </h2>
            <p style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.42)',
              lineHeight: 1.65,
              maxWidth: 360,
              marginTop: 8,
            }}>
              I help companies build products that are not only beautiful
              but also functional and accessible at scale.
            </p>
          </motion.div>

          {/* Right: skill cards grid */}
          <div
            className="skills-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 16,
              width: '100%',
            }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                viewport={{ once: true, margin: '-40px' }}
                className="card-hover skill-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  padding: '28px 24px',
                  background: '#0a0e18',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 24,
                  cursor: 'default',
                }}
              >
                <div className="skill-icon">
                  <skill.icon size={22} />
                </div>
                <span style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />

        {/* ── Toolstack marquee ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
            marginBottom: 28,
          }}>
            Software &amp; Technologies
          </div>

          <div className="marquee-wrap">
            <div className="marquee-track">
              {marqueeItems.map((tool, i) => (
                <span
                  key={`${tool}-${i}`}
                  style={{
                    display: 'inline-block',
                    padding: '10px 22px',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.38)',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 9999,
                    whiteSpace: 'nowrap',
                    transition: 'color 0.2s, background 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.38)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .skills-top {
            flex-direction: row !important;
            align-items: flex-start !important;
            gap: 80px !important;
          }
          .skills-header {
            width: 320px;
            flex-shrink: 0;
          }
          .skills-grid {
            flex: 1;
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
