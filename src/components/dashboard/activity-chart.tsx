import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shadcn-ui/card'
import { ChartConfig } from '@/components/shadcn-ui/chart'
import { getAttemptsCountForPastDays } from '@/actions/attempt'
import { ActivityChartClient } from './activity-chart-client' // novo componente cliente

const chartConfig = {
  primary: {
    label: 'Primary',
    color: 'hsl(200,98%,39%)',
  },
} satisfies ChartConfig

export async function ActivityChart() {
  const attemptsInLastWeek = await getAttemptsCountForPastDays(7)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Entradas no Laboratório</CardTitle>
        <CardDescription>
          Mostrando total de entradas nos últimos 7 dias
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Passa os dados para o componente cliente */}
        <ActivityChartClient data={attemptsInLastWeek} config={chartConfig} />
      </CardContent>
    </Card>
  )
}
