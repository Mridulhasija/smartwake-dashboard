import { motion } from 'framer-motion'
import { useClock } from '../../hooks/useClock'
function DigitalClock() {
const time = useClock()
return (
<motion.h1
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bgclip-text text-6xl font-black tracking-tight text-transparent sm:text-7xl
md:text-8xl lg:text-9xl"
>
{time.toLocaleTimeString()}
</motion.h1>
)
}
export default DigitalClock
