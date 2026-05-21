import { Pause, Play, RotateCcw } from 'lucide-react'
import { useEffect, useState } from 'react'
function PomodoroTimer() {
const [seconds, setSeconds] = useState(1500)
const [active, setActive] = useState(false)
useEffect(() => {
let timer: number
if (active && seconds > 0) {
timer = setInterval(() => {
setSeconds((prev) => prev - 1)
}, 1000)
}
return () => clearInterval(timer)
}, [active, seconds])
const minutes = Math.floor(seconds / 60)
const remainingSeconds = seconds % 60
return (
<div className="text-center">
<div className="mb-5 inline-flex rounded-full bg-purple-500/10 px-4 py-2
text-sm font-medium text-purple-300">
Focus Mode
</div>
<h2 className="mb-8 text-3xl font-black">Pomodoro Timer</h2>
<div className="mb-8 rounded-[32px] border border-white/10 bg-gradient-tobr from-cyan-500/10 to-purple-500/10 px-6 py-10">
<div className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-cliptext text-7xl font-black text-transparent">
{String(minutes).padStart(2, '0')}:
{String(remainingSeconds).padStart(2, '0')}
</div>
</div>
<div className="flex flex-wrap justify-center gap-4">
<button
  onClick={() => setActive(true)}
className="gradient-button flex items-center gap-2 rounded-2xl px-6
py-4 text-sm font-semibold"
>
<Play size={18} />
Start
</button>
<button
onClick={() => setActive(false)}
className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10
px-6 py-4 text-sm font-semibold text-yellow-300 transition hover:scale-105"
>
<div className="flex items-center gap-2">
<Pause size={18} />
Pause
</div>
</button>
<button
onClick={() => {
setSeconds(1500)
setActive(false)
}}
className="rounded-2xl border border-red-500/20 bg-red-500/10 px-6
py-4 text-sm font-semibold text-red-300 transition hover:scale-105"
>
<div className="flex items-center gap-2">
<RotateCcw size={18} />
Reset
</div>
</button>
</div>
</div>
)
}
export default PomodoroTimer
