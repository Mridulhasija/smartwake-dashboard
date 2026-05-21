import { motion } from 'framer-motion'
import { Trash2 } from 'lucide-react'
import type { Alarm } from '../../types/alarm'

interface Props {
  alarm: Alarm
  onDelete: () => void
  onToggle: () => void
}

function AlarmCard({ alarm, onDelete, onToggle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.04)',
        padding: '16px 20px',
        transition: 'background 0.3s ease',
        gap: '12px',
      }}
    >
      <div style={{ minWidth: 0 }}>
        <h3
          style={{
            fontSize: '22px',
            fontWeight: 700,
            color: 'white',
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          {alarm.time}
        </h3>
        <p
          style={{
            marginTop: '4px',
            fontSize: '13px',
            color: 'rgb(148,163,184)',
            margin: '4px 0 0',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {alarm.label || 'No Label'}
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
        {/* FIX: "transitiona-ll" was a typo — completely rewrote toggle with CSS classes */}
        <button
          onClick={onToggle}
          className={`toggle-track ${alarm.active ? 'active' : 'inactive'}`}
          aria-label={alarm.active ? 'Disable alarm' : 'Enable alarm'}
        >
          <div className={`toggle-thumb ${alarm.active ? 'active' : 'inactive'}`} />
        </button>

        <button
          onClick={onDelete}
          style={{
            borderRadius: '12px',
            background: 'rgba(239,68,68,0.1)',
            padding: '10px',
            border: 'none',
            color: 'rgb(248,113,113)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background =
              'rgba(239,68,68,0.2)'
            ;(e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background =
              'rgba(239,68,68,0.1)'
            ;(e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'
          }}
          aria-label="Delete alarm"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </motion.div>
  )
}

export default AlarmCard
