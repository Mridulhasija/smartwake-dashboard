import { useClock } from '../../hooks/useClock'

function DateDisplay() {
  const time = useClock()

  const dateStr = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <p
      style={{
        fontSize: '16px',
        color: 'rgb(148,163,184)',
        margin: '6px 0 0',
        fontWeight: 500,
      }}
    >
      {dateStr}
    </p>
  )
}

export default DateDisplay
