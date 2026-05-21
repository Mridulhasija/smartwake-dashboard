import { motion } from 'framer-motion'
import { Trash2 } from 'lucide-react'
import type { Alarm } from '../../types/alarm'
interface Props {
alarm: Alarm
onDelete: () => void
onToggle: () => void
}
function AlarmCard({ alarm, onDelete, onToggle }: Props) {
return (
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="flex items-center justify-between rounded-3xl border borderwhite/10 bg-white/5 p-5 transition hover:bg-white/[0.08]"
>
<div>
<h3 className="text-2xl font-bold tracking-wide text-white">
{alarm.time}
</h3>
<p className="mt-1 text-sm text-slate-400">
{alarm.label || 'No Label'}
</p>
</div>
<div className="flex items-center gap-4">
<button
onClick={onToggle}
className={`relative h-7 w-14 rounded-full transition-all
duration-300 ${
alarm.active
? 'bg-gradient-to-r from-cyan-400 to-purple-500'
: 'bg-slate-600'
}`}
>
<div
className={`absolute top-1 h-5 w-5 rounded-full bg-white transitionall ${
alarm.active ? 'left-8' : 'left-1'
}`}
/>
</button>
<button
onClick={onDelete}
className="rounded-xl bg-red-500/10 p-3 transition hover:scale-110
hover:bg-red-500/20"
>
<Trash2 className="text-red-400" size={18} />
</button>
</div>
</motion.div>
)
}
export default AlarmCard
