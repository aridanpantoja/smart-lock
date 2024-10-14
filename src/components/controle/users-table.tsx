import { getAllUsers } from '@/actions/user'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/shadcn-ui/card'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../shadcn-ui/table'
import { UserOptions } from './user-options'

export async function UsersTable() {
  const users = await getAllUsers()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todos os usuários</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>NFC ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Cargo</TableHead>
              <TableHead>Criado em</TableHead>
              <TableHead className="text-right">Opções</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.id} className="font-medium">
                <TableCell>{user.nfcId}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  {user.createdAt.toLocaleDateString('pt-BR')}
                </TableCell>
                <TableCell className="text-right">
                  <UserOptions />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
