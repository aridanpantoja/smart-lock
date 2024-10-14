import { Card, CardHeader, CardTitle, CardContent } from '../shadcn-ui/card'
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '../shadcn-ui/table'
import { cn } from '@/lib/utils'
import { getAttemptsWithUser } from '@/actions/attempt'

export async function AccessLogTable() {
  const attemptsWithUser = await getAttemptsWithUser(7)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Últimos registros</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Dia</TableHead>
              <TableHead>Hora</TableHead>
              <TableHead>Colaborador</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attemptsWithUser.map((attempt) => (
              <TableRow key={attempt.id} className="font-medium">
                <TableCell>
                  {attempt.date.toLocaleDateString('pt-BR')}
                </TableCell>
                <TableCell>
                  {attempt.date.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </TableCell>
                <TableCell>{attempt.name ?? 'N/D'}</TableCell>
                <TableCell
                  className={cn(
                    'text-right',
                    attempt.status ? 'text-green-600' : 'text-red-600',
                  )}
                >
                  {attempt.status ? 'Permitido' : 'Negado'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
