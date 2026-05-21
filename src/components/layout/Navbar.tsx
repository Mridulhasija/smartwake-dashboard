import { BellRing, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useDarkMode } from '../../hooks/useDarkMode'
function Navbar() {
const { darkMode, setDarkMode } = useDarkMode()
return (
<motion.nav
initial={{ y: -40, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.5 }}
className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/60
backdrop-blur-xl"
>
<div className="mx-auto flex max-w-7xl items-center justify-between px-6
py-5">
<div className="flex items-center gap-3">
<div
className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/20">
<BellRing size={22} />
</div>
<div>
<h1 className="text-2xl font-black tracking-wide text-white">
SmartWake
</h1>
<p className="text-sm text-slate-400">
Premium productivity dashboard
</p>
</div>
</div>
<button
onClick={() => setDarkMode(!darkMode)}
className="group rounded-2xl border border-white/10 bg-white/5 p-4
transition-all duration-300 hover:scale-105 hover:bg-white/10"
>
<div className="transition-transform duration-300 group-hover:rotate-180">
{darkMode ? <Sun size={22} /> : <Moon size={22} />}
</div>
</button>
</div>
</motion.nav>
)
}
export default Navbar
