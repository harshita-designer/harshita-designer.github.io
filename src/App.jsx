import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'

export default function App() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      background: '#080c14',
      color: '#f8f9fa',
      overflowX: 'hidden',
    }}>
      {/* ── Fixed background layers ── */}
      <div
        aria-hidden
        className="grid-bg"
        style={{
          position: 'fixed',
          inset: 0,
          opacity: 0.45,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        className="hero-glow-bg"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── Navbar (fixed, z-50) ── */}
      <Navbar />

      {/* ── Main content ── */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 clamp(20px, 5vw, 80px)',
      }}>
        <main>
          <Hero />
          <Work />
          <Experience />
          <Skills />
          <Achievements />

          {/* ── Contact CTA ── */}
          <section
            id="contact"
            style={{
              paddingTop: 160,
              paddingBottom: 160,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 40,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}
            >
              <div className="section-label" style={{ justifyContent: 'center' }}>
                Get In Touch
              </div>

              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(48px, 9vw, 108px)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.88,
                margin: 0,
                color: '#fff',
              }}>
                Let's build<br />something great.
              </h2>

              <p style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.42)',
                lineHeight: 1.65,
                maxWidth: 440,
                marginTop: 8,
              }}>
                I am currently available for high-end freelance opportunities
                and strategic full-time positions.
              </p>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn"
                style={{ marginTop: 16 }}
              >
                Start a Conversation
              </motion.button>
            </motion.div>
          </section>
        </main>

        {/* ── Footer ── */}
        <footer style={{
          paddingTop: 56,
          paddingBottom: 56,
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}>
          {/* Social links row */}
          <div style={{ display: 'flex', gap: 24, marginBottom: 8 }}>
            {['LinkedIn', 'Dribbble', 'Behance', 'GitHub'].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#f0a827'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
              >
                {s}
              </a>
            ))}
          </div>

          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: '0.16em',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            HARSHITA <span style={{ color: '#f0a827' }}>•</span> RAI
          </div>

          <p style={{
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)',
            fontWeight: 600,
          }}>
            © {new Date().getFullYear()} · Designed &amp; Developed with passion.
          </p>
        </footer>
      </div>
    </div>
  )
}
