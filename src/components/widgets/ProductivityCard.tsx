import { motion } from 'framer-motion'

interface Props {
  title: string
  value: string
  accent?: 'cyan' | 'purple' | 'pink'
}

const accentColors: Record<string, string> = {
  cyan: '#06b6d4',
  purple: '#8b5cf6',
  pink: '#ec4899',
}

function ProductivityCard({ title, value, accent = 'cyan' }: Props) {
  const color = accentColors[accent]

  return (
       <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="stat-card"
    >
      {/* Decorative glow blob */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '100px',
          height: '100px',
          borderRadius: '9999px',
          background: color,
          opacity: 0.08,
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.04em',
              color: 'rgb(148,163,184)',
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            {title}
          </p>
          <h2
            style={{
              marginTop: '16px',
              fontSize: '52px',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: 'white',
              lineHeight: 1,
            }}
          >
            {value}
          </h2>
        </div>
        <div
          style={{
            marginTop: '6px',
            width: '10px',
            height: '10px',
            borderRadius: '9999px',
            background: color,
            boxShadow: `0 0 10px ${color}`,
            flexShrink: 0,
          }}
        />
      </div>
    </motion.div>
  )
}

export default ProductivityCard
