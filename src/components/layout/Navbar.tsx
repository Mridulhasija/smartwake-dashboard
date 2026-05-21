import { BellRing, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useDarkMode } from '../../hooks/useDarkMode'

function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode()

  return (
        <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar-glass"
      style={{ position: 'sticky', top: 0, zIndex: 50 }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              display: 'flex',
              height: '44px',
              width: '44px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
              boxShadow: '0 4px 20px rgba(6,182,212,0.3)',
              flexShrink: 0,
            }}
          >
            <BellRing size={20} color="white" />
          </div>
          <div>
            <h1
              style={{
                fontSize: '22px',
                fontWeight: 900,
                color: 'white',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              SmartWake
            </h1>
            <p
              style={{
                fontSize: '12px',
                color: 'rgb(148,163,184)',
                margin: 0,
              }}
            >
              Premium productivity dashboard
            </p>
          </div>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            borderRadius: '14px',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.05)',
            padding: '10px',
            color: 'white',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background =
              'rgba(255,255,255,0.1)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background =
              'rgba(255,255,255,0.05)'
          }}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
