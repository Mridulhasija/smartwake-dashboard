import { useEffect, useState } from 'react'
import type { Alarm } from '../types/alarm'
export function useAlarm() {
const [alarms, setAlarms] = useState<Alarm[]>(() => {
const saved = localStorage.getItem('alarms')
return saved ? JSON.parse(saved) : []
})
useEffect(() => {
localStorage.setItem('alarms', JSON.stringify(alarms))
}, [alarms])
const addAlarm = (alarm: Alarm) => {
    setAlarms((prev) => [...prev, alarm])
}
const deleteAlarm = (id: string) => {
setAlarms((prev) => prev.filter((alarm) => alarm.id !== id))
}
const toggleAlarm = (id: string) => {
setAlarms((prev) =>
prev.map((alarm) =>
alarm.id === id
? { ...alarm, active: !alarm.active }
: alarm
)
)
}
return {
alarms,
addAlarm,
deleteAlarm,
toggleAlarm,
}
}
