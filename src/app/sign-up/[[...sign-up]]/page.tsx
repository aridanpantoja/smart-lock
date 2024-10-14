import { Logo } from '@/components/logo'
import { buttonVariants } from '@/components/shadcn-ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/shadcn-ui/card'
import Link from 'next/link'

export default function SignUp() {
  return (
    <Card className="w-full max-w-none text-center sm:max-w-96">
      <CardHeader className="flex items-center gap-4 text-center">
        <Logo />
        <CardDescription>
          Entre em contato com os professores responsáveis pelo laboratório para
          criar sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link href="/sign-in" className={buttonVariants()}>
          Fazer login &rarr;
        </Link>
      </CardContent>
    </Card>
  )
}
