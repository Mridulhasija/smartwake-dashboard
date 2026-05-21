import { motion } from 'framer-motion'
import { useClock } from '../../hooks/useClock'
function DigitalClock() {
const time = useClock()
return (
<motion.h1
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-7xl font-black text-transparent md:text-9xl"
>
{time.toLocaleTimeString()}
</motion.h1>
)
}
export default DigitalClock
