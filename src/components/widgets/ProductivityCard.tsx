import { motion } from 'framer-motion'
interface Props {
title: string
value: string
}
function ProductivityCard({ title, value }: Props) {
return (
<motion.div
whileHover={{ y: -5 }}
className="glass-card rounded-[28px] p-6"
>
<p className="text-sm font-medium text-slate-400">
{title}
</p>
<h2 className="mt-3 bg-gradient-to-r from-cyan-300 to-purple-400 bg-cliptext text-5xl font-black text-transparent">
{value}
</h2>
</motion.div>
)
}
export default ProductivityCard
