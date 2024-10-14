import { ActivityChart } from '@/components/dashboard/activity-chart'
import { AccessLogTable } from '@/components/dashboard/access-log-table'
import { DashboardStats } from '@/components/dashboard/dashboard-stats'

export default async function Dashboard() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <DashboardStats />
      <div className="grid gap-4 md:gap-8 xl:grid-cols-2">
        <ActivityChart />
        <AccessLogTable />
      </div>
    </div>
  )
}
