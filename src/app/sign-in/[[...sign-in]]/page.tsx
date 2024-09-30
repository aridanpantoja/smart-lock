'use client'

import { buttonVariants } from '@/components/shadcn-ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/shadcn-ui/card'
import { inputVariants } from '@/components/shadcn-ui/input'
import { cn } from '@/lib/utils'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Link from 'next/link'
import React from 'react'

export default function SignInPage() {
  return (
    <SignIn.Root>
      <SignIn.Step className="w-full max-w-none sm:max-w-96" name="start">
        <Card className="w-full">
          <CardHeader className="items-center text-center">
            <h1 className="text-2xl font-bold">Logar no GIALCA</h1>
            <CardDescription>
              Bem-vindo novamente! Logue para continuar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Clerk.Field name="identifier" className="space-y-2">
              <Clerk.Label className="text-sm font-medium text-foreground">
                Usuário
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className={cn(inputVariants(), 'data-[invalid]:ring-red-400')}
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>

            <Clerk.Field name="password" className="space-y-2">
              <Clerk.Label className="text-sm font-medium text-zinc-950">
                Senha
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className={cn(inputVariants(), 'data-[invalid]:ring-red-400')}
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>

            <SignIn.Action
              submit
              className={buttonVariants({ className: 'w-full' })}
            >
              Entrar
            </SignIn.Action>
          </CardContent>
          <CardFooter className="flex justify-center text-center">
            <CardDescription>
              Não tem acesso?{' '}
              <Link
                href="/sign-up"
                className={buttonVariants({
                  variant: 'link',
                  size: 'link',
                })}
              >
                Crie sua conta
              </Link>
            </CardDescription>
          </CardFooter>
        </Card>
      </SignIn.Step>
    </SignIn.Root>
  )
}
