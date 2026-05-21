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
className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/[0.08]"
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
className={`absolute top-1 h-5 w-5 rounded-full bg-white transitiona-ll duration-300 ${
alarm.active ? 'left-8' : 'left-1'
}`}
/>
