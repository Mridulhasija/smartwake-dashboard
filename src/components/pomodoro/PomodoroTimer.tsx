import { Pause, Play, RotateCcw } from 'lucide-react'
import { useEffect, useState } from 'react'

function PomodoroTimer() {
  const [seconds, setSeconds] = useState(1500)
  const [active, setActive] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>
    if (active && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [active, seconds])

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  const progress = ((1500 - seconds) / 1500) * 100

  return (
    <div>
      <div
        style={{
          display: 'inline-flex',
          borderRadius: '9999px',
          background: 'rgba(139,92,246,0.12)',
          padding: '6px 16px',
          marginBottom: '12px',
        }}
      >
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#c084fc' }}>
          Focus Mode
        </span>
      </div>

      <h2
        style={{
          fontSize: '26px',
          fontWeight: 700,
          color: 'white',
          margin: '0 0 24px',
        }}
      >
        Pomodoro Timer
      </h2>

      {/* Timer display */}
      <div
        style={{
          marginBottom: '24px',
          display: 'flex',
          minHeight: '200px',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.02)',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.3em',
            color: 'rgb(100,116,139)',
            textTransform: 'uppercase',
          }}
        >
          Focus Session
        </div>
        {/* FIX: gradient text inline to avoid multiline className issue */}
        <div
          style={{
            background: 'linear-gradient(to right, #67e8f9, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 'clamp(3rem, 8vw, 4.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          {String(minutes).padStart(2, '0')}:{String(remainingSeconds).padStart(2, '0')}
        </div>

        {/* Progress bar */}
        <div
          style={{
            width: '80%',
            height: '4px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '9999px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(to right, #06b6d4, #8b5cf6)',
              borderRadius: '9999px',
              transition: 'width 1s linear',
            }}
          />
        </div>
      </div>

      {/* FIX: buttons in a proper flex container that won't overflow */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <button
          onClick={() => setActive(true)}
          className="timer-btn"
          style={{ background: '#06b6d4', color: 'white', flex: 1, minWidth: '90px' }}
        >
          <Play size={16} />
          Start
        </button>
        <button
          onClick={() => setActive(false)}
          className="timer-btn"
          style={{ background: '#eab308', color: 'black', flex: 1, minWidth: '90px' }}
        >
          <Pause size={16} />
          Pause
        </button>
        <button
          onClick={() => {
            setSeconds(1500)
            setActive(false)
          }}
          className="timer-btn"
          style={{ background: '#ef4444', color: 'white', flex: 1, minWidth: '90px' }}
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>
    </div>
  )
}

export default PomodoroTimer
