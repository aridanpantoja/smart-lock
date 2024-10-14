'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/shadcn-ui/chart'

export function ActivityChartClient({ data, config }: any) {
  return (
    <ChartContainer config={config}>
      <AreaChart
        accessibilityLayer
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <defs>
          <linearGradient id="fill" x1="1" y1="0" x2="0" y2="0">
            <stop
              offset="5%"
              stopColor="var(--color-primary)"
              stopOpacity={0.5}
            />
            <stop
              offset="95%"
              stopColor="var(--color-primary)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="entradas"
          type="linear"
          fill="url(#fill)"
          fillOpacity={0.8}
          stroke="var(--color-primary)"
        />
      </AreaChart>
    </ChartContainer>
  )
}
