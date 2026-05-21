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
<h2 className="mb-6 text-2xl font-bold">Pomodoro</h2>
<div className="mb-6 text-6xl font-black text-cyan-400">
{String(minutes).padStart(2, '0')}:
{String(remainingSeconds).padStart(2, '0')}
</div>
<div className="flex justify-center gap-4">
<button
onClick={() => setActive(true)}
className="rounded-xl bg-green-500 px-5 py-3"
>
Start
</button>
<button
onClick={() => setActive(false)}
className="rounded-xl bg-yellow-500 px-5 py-3"
>
Pause
</button>
<button
onClick={() => {
setSeconds(1500)
setActive(false)
}}
className="rounded-xl bg-red-500 px-5 py-3"
>
Reset
</button>
</div>
</div>
)
}
export default PomodoroTimer