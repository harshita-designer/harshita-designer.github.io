import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'WORK',         href: '#work' },
  { name: 'EXPERIENCE',   href: '#experience' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'CONTACT',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeAndNav = (href) => {
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      {/* ── Desktop / main nav ── */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          padding: '0 24px',
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: scrolled
            ? 'rgba(8,12,20,0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.05)'
            : '1px solid transparent',
          transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        <div style={{
          maxWidth: 1280,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textDecoration: 'none',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            HARSHITA
            <span style={{ color: '#f0a827' }}>•</span>
            RAI
          </a>

          {/* Desktop nav links */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                {item.name}
              </motion.a>
            ))}

            <motion.a
              href="#"
              className="resume-btn"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: 4,
            }}
            className="md:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile hamburger — visible only < md via inline media hack */}
      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: block !important; }
        }
      `}</style>
      <button
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
        className="mobile-burger"
        style={{
          display: 'none',
          position: 'fixed',
          top: 20,
          right: 24,
          zIndex: 60,
          background: 'none',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          padding: 4,
        }}
      >
        <Menu size={24} />
      </button>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                padding: 4,
              }}
            >
              <X size={28} />
            </button>

            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="mobile-menu-link"
                onClick={(e) => { e.preventDefault(); closeAndNav(item.href) }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {item.name}
              </motion.a>
            ))}

            <motion.a
              href="#"
              className="resume-btn"
              style={{ marginTop: 16, textDecoration: 'none' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => setMobileOpen(false)}
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
