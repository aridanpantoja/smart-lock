import { LucideIcon } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/shadcn-ui/card'

type DashboardCardProps = {
  title: string
  Icon: LucideIcon
  value: string
  description: string
}

export function DashboardCard({
  title,
  Icon,
  value,
  description,
}: DashboardCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
