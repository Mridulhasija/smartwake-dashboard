import Navbar from './components/layout/Navbar'
import DigitalClock from './components/clock/DigitalClock'
import DateDisplay from './components/clock/DateDisplay'
import AlarmForm from './components/alarms/AlarmForm'
import AlarmList from './components/alarms/AlarmList'
import PomodoroTimer from './components/pomodoro/PomodoroTimer'
import AuroraBackground from './components/background/AuroraBackground'
function App() {
return (
<div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
<AuroraBackground />
<div className="relative z-10">
<Navbar />
<main className="mx-auto max-w-7xl px-6 py-10">
<section className="flex flex-col items-center justify-center text-center py-16">
<DigitalClock />
<DateDisplay />
<p className="mt-6 max-w-xl text-slate-300">
Stay productive with alarms, focus sessions, and a clean
productivity dashboard.
</p>
</section>
<section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6
backdrop-blur-xl">
<h2 className="mb-5 text-xl font-semibold">Add Alarm</h2>
<AlarmForm />
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6
backdrop-blur-xl">
<PomodoroTimer />
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6
backdrop-blur-xl">
<h2 className="mb-5 text-xl font-semibold">Upcoming Alarms</h2>
<AlarmList />
</div>
</section>
</main>
</div>
</div>
)
}
export default App
