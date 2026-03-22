import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 'clamp(120px, 18vh, 180px)',
        paddingBottom: 'clamp(80px, 12vh, 140px)',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Extra radial glow behind heading */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          height: '40vw',
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>

          {/* ── Available badge ── */}
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 18px',
              background: 'rgba(240,168,39,0.08)',
              border: '1px solid rgba(240,168,39,0.2)',
              borderRadius: 9999,
            }}>
              {/* Pulsing dot */}
              <span style={{ position: 'relative', display: 'inline-flex' }}>
                <span style={{
                  display: 'inline-block',
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 0 0 rgba(34,197,94,0.5)',
                  animation: 'ping 1.5s ease-in-out infinite',
                }} />
              </span>
              <span style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#f0a827',
              }}>
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* ── Main heading ── */}
          <motion.h1
            {...fadeUp(0.1)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(56px, 10vw, 128px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 0.88,
              color: '#fff',
              margin: 0,
            }}
          >
            HARSHITA
            <br />
            <span style={{ color: 'rgba(255,255,255,0.28)' }}>RAI</span>
            {' '}
            <span
              style={{
                display: 'inline-block',
                width: 'clamp(10px, 1.2vw, 18px)',
                height: 'clamp(10px, 1.2vw, 18px)',
                borderRadius: '50%',
                background: '#f0a827',
                verticalAlign: 'middle',
                marginBottom: '0.12em',
              }}
            />
          </motion.h1>

          {/* ── Sub-headline ── */}
          <motion.p
            {...fadeUp(0.2)}
            style={{
              maxWidth: 560,
              fontSize: 'clamp(16px, 2vw, 21px)',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.65,
              fontWeight: 400,
              margin: 0,
            }}
          >
            I'm a digital designer and developer focused on building
            high-end, scalable interfaces for SaaS and Enterprise UX.
          </motion.p>

          {/* ── CTA buttons ── */}
          <motion.div
            {...fadeUp(0.3)}
            style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginTop: 8 }}
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '18px 40px',
                background: '#fff',
                color: '#000',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                borderRadius: 9999,
                textDecoration: 'none',
                transition: 'background 0.25s, box-shadow 0.25s',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#f0a827'
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(240,168,39,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              View Projects
              <ArrowUpRight size={17} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '18px 40px',
                background: 'transparent',
                color: '#fff',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                borderRadius: 9999,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.14)',
                transition: 'background 0.25s, border-color 0.25s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
              }}
            >
              Say Hello
            </motion.a>
          </motion.div>

          {/* ── Scroll hint ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginTop: 24,
            }}
          >
            <div style={{
              width: 1,
              height: 40,
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)',
            }} />
            <span style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
            }}>
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── Floating experience badge ── */}
      <motion.div
        className="exp-badge"
        initial={{ opacity: 0, scale: 0.88, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: '38%',
          right: '4%',
          display: 'none',  /* shown via media query below */
        }}
        className="exp-badge lg-only"
      >
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(40px, 5vw, 64px)',
          fontWeight: 800,
          color: '#f0a827',
          lineHeight: 1,
          letterSpacing: '-0.04em',
        }}>
          4+
        </div>
        <div style={{
          fontSize: 10,
          fontWeight: 700,
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginTop: 8,
        }}>
          Years Experience
        </div>
      </motion.div>

      {/* ── Second floating badge: projects count ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, rotate: 4 }}
        animate={{ opacity: 1, scale: 1, rotate: 4 }}
        transition={{ delay: 0.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="exp-badge lg-only-2"
        style={{ position: 'absolute', bottom: '22%', right: '6%', display: 'none' }}
      >
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1,
          letterSpacing: '-0.04em',
        }}>
          30+
        </div>
        <div style={{
          fontSize: 10,
          fontWeight: 700,
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginTop: 8,
        }}>
          Projects Shipped
        </div>
      </motion.div>

      {/* Show floating badges only on large screens */}
      <style>{`
        @keyframes ping {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50% { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }
        @media (min-width: 1024px) {
          .lg-only  { display: flex !important; flex-direction: column; }
          .lg-only-2 { display: flex !important; flex-direction: column; }
        }
      `}</style>
    </section>
  )
}
