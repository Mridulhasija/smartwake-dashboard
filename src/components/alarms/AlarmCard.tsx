import { Trash2 } from 'lucide-react'
import { Alarm } from '../../types/alarm'
interface Props {
alarm: Alarm
onDelete: () => void
onToggle: () => void
}
function AlarmCard({ alarm, onDelete, onToggle }: Props) {
return (
<div className="flex items-center justify-between rounded-2xl border borderwhite/10 bg-white/5 p-4">
<div>
<h3 className="text-lg font-semibold">{alarm.time}</h3>
<p className="text-sm text-slate-400">{alarm.label}</p>
</div>
<div className="flex items-center gap-3">
<button
onClick={onToggle}
className={`h-6 w-12 rounded-full transition ${
alarm.active ? 'bg-green-500' : 'bg-slate-500'
}`}
/>
<button onClick={onDelete}>
<Trash2 className="text-red-400" />
</button>
</div>
</div>
)
}
export default AlarmCard
