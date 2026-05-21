import { Clock3 } from 'lucide-react'
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
<form onSubmit={handleSubmit} className="space-y-5">
<div>
<label className="mb-2 block text-sm font-medium text-slate-300">
Alarm Time
</label>
<input
type="time"
value={time}
onChange={(e) => setTime(e.target.value)}
className="w-full rounded-2xl border border-white/10 bg-white/5 p-4
text-white outline-none"
/>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-slate-300">
Alarm Label
</label>
<input
type="text"
placeholder="Morning Workout"
value={label}
onChange={(e) => setLabel(e.target.value)}
className="w-full rounded-2xl border border-white/10 bg-white/5 p-4
text-white outline-none"
/>
</div>
<button
className="gradient-button flex w-full items-center justify-center gap-2
rounded-2xl py-4 text-sm font-semibold text-white">
<Clock3 size={18} />
Add Smart Alarm
</button>
</form>
)
}
export default AlarmForm
