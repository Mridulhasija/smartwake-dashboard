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
<div className="relative min-h-screen overflow-hidden bg-slate-950 textwhite">
<AuroraBackground />
<div className="relative z-10">
<Navbar />
<section className="glass relative overflow-hidden rounded-[36px] px-6 py-16
md:px-12">
<div className="mx-auto max-w-4xl text-center">
<div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bgcyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
Productivity Dashboard
</div>
<DigitalClock />
<DateDisplay />
<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
Organize your day with smart alarms, immersive focus sessions,
productivity tracking, and smooth dashboard interactions.
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
<section className="dashboard-grid mt-8">
<div className="glass-card rounded-[32px] p-7">
<div className="mb-6 flex items-center justify-between">
<h2 className="text-2xl font-bold">Add Alarm</h2>
<div className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs
font-medium text-cyan-300">
Smart Alerts
</div>
</div>
<AlarmForm />
</div>
<div className="glass-card rounded-[32px] p-7">
<PomodoroTimer />
</div>
<div className="glass-card rounded-[32px] p-7">
<div className="mb-6 flex items-center justify-between">
<h2 className="text-2xl font-bold">Upcoming Alarms</h2>
<div className="rounded-full bg-purple-500/10 px-3 py-1 text-xs
font-medium text-purple-300">
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
