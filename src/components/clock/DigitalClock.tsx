import { motion } from 'framer-motion'
import { useClock } from '../../hooks/useClock'
function DigitalClock() {
const time = useClock()
return (
<motion.h1
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text
text-5xl font-black tracking-tight text-transparent sm:text-6xl md:text-7xl
lg:text-8xl"
>
{time.toLocaleTimeString([], {
hour: '2-digit',
minute: '2-digit',
second: '2-digit',
})}
</motion.h1>
)
}
export default DigitalClock
