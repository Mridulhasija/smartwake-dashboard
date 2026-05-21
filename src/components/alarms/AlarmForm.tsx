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
className="input-modern"
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
className="input-modern"
/>
</div>
<button className="primary-btn w-full">
<div className="flex items-center justify-center gap-2">
<Clock3 size={18} />
Add Smart Alarm
</div>
</button>
</form>
)
}
export default AlarmForm
