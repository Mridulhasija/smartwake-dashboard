import { motion } from 'framer-motion'
import { useClock } from '../../hooks/useClock'

function DigitalClock() {
  const time = useClock()

  return (
        <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'linear-gradient(to right, #67e8f9, #c084fc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontSize: 'clamp(3rem, 10vw, 6rem)',
        fontWeight: 900,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        margin: '16px 0',
      }}
    >
      {time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })}
    </motion.h1>
  )
}

export default DigitalClock
