import { LucideIcon } from 'lucide-react'
import { Card, CardTitle, CardContent } from '@/components/shadcn-ui/card'

type DashboardCardProps = {
  title: string
  Icon: LucideIcon
  value: string
}

export function DashboardCard({ title, Icon, value }: DashboardCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-6">
        <div className="">
          <CardTitle className="text-base font-medium">{title}</CardTitle>
          <div className="text-xl font-bold">{value}</div>
        </div>
        <div className="flex size-12 items-center justify-center rounded-full bg-primary">
          <Icon className="size-6 text-primary-foreground" />
        </div>
      </CardContent>
    </Card>
  )
}
