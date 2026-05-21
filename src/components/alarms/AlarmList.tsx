import AlarmCard from './AlarmCard'
import { useAlarm } from '../../hooks/useAlarm'
function AlarmList() {
const { alarms, deleteAlarm, toggleAlarm } = useAlarm()
return (
<div className="space-y-4">
{alarms.length === 0 && (
<p className="text-slate-400">No alarms added.</p>
)}
{alarms.map((alarm) => (
<AlarmCard
key={alarm.id}
alarm={alarm}
onDelete={() => deleteAlarm(alarm.id)}
onToggle={() => toggleAlarm(alarm.id)}
/>
))}
</div>
)
}
export default AlarmList