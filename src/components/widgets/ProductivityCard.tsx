import { motion } from 'framer-motion'
interface Props {
title: string
value: string
}
function ProductivityCard({ title, value }: Props) {
return (
<motion.div
whileHover={{ y: -4 }}
transition={{ duration: 0.25 }}
className="glass rounded-[28px] p-6"
>
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium text-slate-400">
{title}
</p>
<h2 className="mt-4 text-5xl font-black tracking-tight text-white">
{value}
</h2>
</div>
<div className="h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadowcyan-500/40" />
</div>
</motion.div>
)
}
export default ProductivityCard
