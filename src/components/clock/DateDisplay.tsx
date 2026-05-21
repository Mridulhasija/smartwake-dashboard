import { useClock } from '../../hooks/useClock'
function DateDisplay() {
const time = useClock()
return (
<p className="mt-4 text-lg text-slate-300">{time.toDateString()}
</p>
)
}
export default DateDisplay