import { Moon, Sun } from 'lucide-react'
import { useDarkMode } from '../../hooks/useDarkMode'
function Navbar() {
const { darkMode, setDarkMode } = useDarkMode()
return (
<nav className="flex items-center justify-between px-6 py-5">
<h1 className="text-2xl font-bold tracking-wide text-cyan-400">
SmartWake
</h1>
<button
onClick={() => setDarkMode(!darkMode)}
className="rounded-full border border-white/10 bg-white/10 p-3
transition hover:scale-110"
>{darkMode ? <Sun size={20} /> : <Moon size={20} />}
</button>
</nav>
)
}
export default Navbar