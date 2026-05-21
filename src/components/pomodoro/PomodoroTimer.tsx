import { Pause, Play, RotateCcw } from 'lucide-react'
import { useEffect, useState } from 'react'
function PomodoroTimer() {
const [seconds, setSeconds] = useState(1500)
const [active, setActive] = useState(false)
useEffect(() => {
let timer: number
if (active && seconds > 0) {
timer = window.setInterval(() => {
setSeconds((prev) => prev - 1)
}, 1000)
}
return () => clearInterval(timer)
}, [active, seconds])
const minutes = Math.floor(seconds / 60)
const remainingSeconds = seconds % 60
return (
<div>
<div className="mb-4 inline-flex rounded-full bg-purple-500/10 px-4 py-2
text-sm font-semibold text-purple-300">
Focus Mode
</div>
<h2 className="mb-8 text-4xl font-black text-white">
Pomodoro Timer
</h2>
<div className="mb-8 flex min-h-[220px] items-center justify-center rounded-
[30px] border border-white/6 bg-white/[0.03]">
<div className="text-center">
<div className="mb-3 text-sm font-medium uppercase tracking-[0.3em] textslate-500">
Focus Session
</div>
<div className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text
text-6xl font-black tracking-tight text-transparent md:text-7xl">
{String(minutes).padStart(2, '0')}:
{String(remainingSeconds).padStart(2, '0')}
</div>
</div>
</div>
<div className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-cliptext text-6xl font-black text-transparent md:text-7xl">
{String(minutes).padStart(2, '0')}:
{String(remainingSeconds).padStart(2, '0')}
</div>
</div>
<div className="flex flex-wrap gap-4">
<button
onClick={() => setActive(true)}
className="timer-btn bg-cyan-500 text-white hover:bg-cyan-400"
>
<Play size={18} />
Start
</button>
<button
onClick={() => setActive(false)}
className="timer-btn bg-yellow-400 text-black hover:bg-yellow-300"
>
<Pause size={18} />
Pause
</button>
<button
onClick={() => {
setSeconds(1500)
setActive(false)
}}
className="timer-btn bg-red-500 text-white hover:bg-red-400"
>
<RotateCcw size={18} />
Reset
</button>
</div>
</div>
)
}
export default PomodoroTimer
