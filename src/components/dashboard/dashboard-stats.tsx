import { Calendar, CalendarDays, DoorOpen, Users } from 'lucide-react'
import { DashboardCard } from './dashboard-card'
import { getAttemptsByDays, getLastAttempt } from '@/actions/attempt'
import { getTotalUsers } from '@/actions/user'

export async function DashboardStats() {
  const usersLenght = (await getTotalUsers()) ?? 'N/D'
  const attemptsToday = await getAttemptsByDays(1)
  const attemptsWeek = await getAttemptsByDays(7)
  const lastAttempt = await getLastAttempt()

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:gap-8 2xl:grid-cols-4">
      <DashboardCard
        title="Registros (hoje)"
        Icon={Calendar}
        value={attemptsToday.length.toString()}
      />

      <DashboardCard
        title="Registros (semana)"
        Icon={CalendarDays}
        value={attemptsWeek.length.toString()}
      />

      <DashboardCard
        title="Última tentativa"
        Icon={DoorOpen}
        value={lastAttempt}
      />

      <DashboardCard
        title="Usuários"
        Icon={Users}
        value={usersLenght.toString()}
      />
    </div>
  )
}
