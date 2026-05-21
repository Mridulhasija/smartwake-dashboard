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
<div className="app-bg min-h-screen overflow-hidden text-white">
<AuroraBackground />
<div className="relative z-10">
<Navbar />
<main className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
<section className="glass rounded-3xl px-6 py-14 md:px-12">
<div className="mx-auto max-w-4xl text-center">
<div className="mb-5 inline-flex rounded-full border bordercyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
Productivity Dashboard
</div>
<DigitalClock />
<DateDisplay />
<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 textslate-300">
Organize your day with smart alarms, focus sessions,
productivity tracking and immersive dashboard interactions.
</p>
<div className="mt-10 flex flex-wrap justify-center gap-4">
<button className="primary-btn">
Start Focus Session
</button>
<button className="secondary-btn">
Explore Dashboard
</button>
</div>
</div>
</section>
<section className="mt-8 grid gap-6 md:grid-cols-3">
<ProductivityCard title="Active Alarms" value="06" />
<ProductivityCard title="Focus Hours" value="12h" />
<ProductivityCard title="Completed Sessions" value="18" />
</section>
<section className="mt-8 grid gap-6 lg:grid-cols-3">
<div className="glass rounded-3xl p-7">
<div className="mb-6 flex items-center justify-between">
<h2 className="text-2xl font-bold text-white md:text-3xl">
Add Alarm
</h2>
<div className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs
font-semibold text-cyan-300">
Smart Alerts
</div>
</div>
<AlarmForm />
</div>
<div className="glass rounded-3xl p-7">
<PomodoroTimer />
</div>
<div className="glass rounded-3xl p-7">
<div className="mb-6 flex items-center justify-between">
<h2 className="text-2xl font-bold text-white md:text-3xl">
Upcoming Alarms
</h2>
<div className="rounded-full bg-purple-500/10 px-3 py-1 text-xs
font-semibold text-purple-300">
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
