import Navbar from './components/layout/Navbar'
import DigitalClock from './components/clock/DigitalClock'
import DateDisplay from './components/clock/DateDisplay'
import AlarmForm from './components/alarms/AlarmForm'
import AlarmList from './components/alarms/AlarmList'
import PomodoroTimer from './components/pomodoro/PomodoroTimer'
import AuroraBackground from './components/background/AuroraBackground'
import ProductivityCard from './components/widgets/ProductivityCard'

function App() {
  return (
    <div className="app-bg" style={{ minHeight: '100vh', overflowX: 'hidden', color: 'white' }}>
      <AuroraBackground />

      {}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        <main
          style={{
            maxWidth: '1152px',
            margin: '0 auto',
            padding: '32px 16px',
          }}
        >
          {}
          <section className="glass" style={{ borderRadius: '28px', padding: 'clamp(32px, 6vw, 64px) clamp(20px, 5vw, 48px)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <div
                style={{
                  display: 'inline-flex',
                  borderRadius: '9999px',
                  border: '1px solid rgba(6,182,212,0.25)',
                  background: 'rgba(6,182,212,0.1)',
                  padding: '6px 16px',
                  marginBottom: '12px',
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#67e8f9' }}>
                  ✦ Productivity Dashboard
                </span>
              </div>

              <DigitalClock />
              <DateDisplay />

              <p
                style={{
                  maxWidth: '520px',
                  margin: '20px auto 0',
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: 'rgb(148,163,184)',
                }}
              >
                Organize your day with smart alarms, focus sessions,
                productivity tracking and immersive dashboard interactions.
              </p>

              <div
                style={{
                  marginTop: '32px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '12px',
                }}
              >
                <button className="primary-btn">Start Focus Session</button>
                <button className="secondary-btn">Explore Dashboard</button>
              </div>
            </div>
          </section>

          {}
          <section
            style={{
              marginTop: '24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            <ProductivityCard title="Active Alarms" value="06" accent="cyan" />
            <ProductivityCard title="Focus Hours" value="12h" accent="purple" />
            <ProductivityCard title="Completed Sessions" value="18" accent="pink" />
          </section>

          {}
          <section
            style={{
              marginTop: '24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {}
            <div className="glass" style={{ borderRadius: '24px', padding: '28px' }}>
              <div
                style={{
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'white', margin: 0 }}>
                  Add Alarm
                </h2>
                <div
                  style={{
                    borderRadius: '9999px',
                    background: 'rgba(6,182,212,0.1)',
                    padding: '4px 12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#67e8f9',
                  }}
                >
                  Smart Alerts
                </div>
              </div>
              <AlarmForm />
            </div>

            {}
            <div className="glass" style={{ borderRadius: '24px', padding: '28px' }}>
              <PomodoroTimer />
            </div>

            {}
            <div className="glass" style={{ borderRadius: '24px', padding: '28px' }}>
              <div
                style={{
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'white', margin: 0 }}>
                  Upcoming Alarms
                </h2>
                <div
                  style={{
                    borderRadius: '9999px',
                    background: 'rgba(139,92,246,0.1)',
                    padding: '4px 12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#c084fc',
                  }}
                >
                  Live Status
                </div>
              </div>
              <AlarmList />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
