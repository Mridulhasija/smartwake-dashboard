import { motion } from 'framer-motion'
interface Props {
title: string
value: string
}
function ProductivityCard({ title, value }: Props) {
return (
<motion.div
whileHover={{ y: -5 }}
transition={{ duration: 0.25 }}
className="group relative overflow-hidden rounded-[30px] border borderwhite/6 bg-white/[0.03] p-7 backdrop-blur-xl"
>
<div className="relative z-10 flex items-start justify-between">
<div>
<p className="text-sm font-medium tracking-wide text-slate-400">
{title}
</p>
<h2 className="mt-5 text-5xl font-black tracking-tight text-white">
{value}
</h2>
</div>
<div className="mt-2 h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadowcyan-500/40" />
</div>
</motion.div>
)
}
export default ProductivityCard
