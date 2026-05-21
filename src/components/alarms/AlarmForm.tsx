import { useState } from 'react'
import { useAlarm } from '../../hooks/useAlarm'
function AlarmForm() {
const [time, setTime] = useState('')
const [label, setLabel] = useState('')
const { addAlarm } = useAlarm()
const handleSubmit = (e: React.FormEvent) => {
e.preventDefault()
if (!time) return
addAlarm({
id: crypto.randomUUID(),
time,
label,
active: true,
})
setTime('')
setLabel('')
}
return (
<form onSubmit={handleSubmit} className="space-y-4">
<input
type="time"
value={time}
onChange={(e) => setTime(e.target.value)}
className="w-full rounded-xl border border-white/10 bg-white/10 p-3
outline-none"
/>
<input
type="text"
placeholder="Alarm Label"
value={label}
onChange={(e) => setLabel(e.target.value)}
className="w-full rounded-xl border border-white/10 bg-white/10 p-3 
outline-none"
/>
<button
className="w-full rounded-xl bg-cyan-500 py-3 font-semibold transition
hover:scale-[1.02]"
>
Add Alarm
</button>
</form>
)
}
export default AlarmForm